import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getServiceById } from '@/data/services';

// Inicializar Stripe con tu secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
});

export async function POST(request: NextRequest) {
  try {
    const { serviceId } = await request.json();

    // Obtener el servicio
    const service = getServiceById(serviceId);

    if (!service) {
      return NextResponse.json(
        { error: 'Servicio no encontrado' },
        { status: 404 }
      );
    }

    // Extraer el precio numérico (ej: "€299" -> 299)
    const priceMatch = service.price.match(/\d+/);
    if (!priceMatch) {
      return NextResponse.json(
        { error: 'Precio inválido' },
        { status: 400 }
      );
    }

    const priceInCents = parseInt(priceMatch[0]) * 100; // Convertir a centavos

    // Crear sesión de Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: service.title,
              description: service.description,
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
      metadata: {
        serviceId: serviceId,
        serviceTitle: service.title,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error al crear la sesión de pago' },
      { status: 500 }
    );
  }
}
