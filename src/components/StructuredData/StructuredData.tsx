export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Flash y Contenido',
    url: 'https://www.flashycontenido.com',
    logo: 'https://www.flashycontenido.com/logo.png',
    description: 'Agencia de marketing digital especializada en diseño web, gestión de redes sociales, branding y campañas publicitarias',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-614-626-806',
      contactType: 'customer service',
      areaServed: 'ES',
      availableLanguage: ['Spanish', 'Español'],
    },
    sameAs: [
      // Add social media URLs here when available
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Flash y Contenido',
    image: 'https://www.flashycontenido.com/logo.png',
    '@id': 'https://www.flashycontenido.com',
    url: 'https://www.flashycontenido.com',
    telephone: '+34614626806',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'ES',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Creación de Marca',
        description: 'Desarrollo de identidad visual y estrategia de branding profesional',
        provider: {
          '@type': 'Organization',
          name: 'Flash y Contenido',
        },
        areaServed: 'ES',
        offers: {
          '@type': 'Offer',
          price: '120',
          priceCurrency: 'EUR',
        },
      },
      {
        '@type': 'Service',
        name: 'Diseño de Páginas Web',
        description: 'Páginas web de aterrizaje con diseño estratégico y optimización SEO',
        provider: {
          '@type': 'Organization',
          name: 'Flash y Contenido',
        },
        areaServed: 'ES',
        offers: {
          '@type': 'Offer',
          price: '299',
          priceCurrency: 'EUR',
        },
      },
      {
        '@type': 'Service',
        name: 'Paquete Todo en Uno',
        description: 'Creación de marca, página web y campañas publicitarias',
        provider: {
          '@type': 'Organization',
          name: 'Flash y Contenido',
        },
        areaServed: 'ES',
        offers: {
          '@type': 'Offer',
          price: '850',
          priceCurrency: 'EUR',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
