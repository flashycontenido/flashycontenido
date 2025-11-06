import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID requerido' },
        { status: 400 }
      );
    }

    // Recuperar la sesión de Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items'],
    });

    return NextResponse.json({
      id: session.id,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_email: session.customer_details?.email,
      customer_name: session.customer_details?.name,
      payment_status: session.payment_status,
      created: session.created,
      metadata: session.metadata,
      line_items: session.line_items?.data,
    });
  } catch (error) {
    console.error('Error retrieving session:', error);
    return NextResponse.json(
      { error: 'Error al obtener detalles de la sesión' },
      { status: 500 }
    );
  }
}
