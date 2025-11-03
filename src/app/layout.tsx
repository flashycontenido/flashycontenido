import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import Header from "@/components/Header/Header";
import "@/styles/globals.scss";
import Footer from "@/components/Footer/Footer";
import StructuredData from "@/components/StructuredData/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Flash y Contenido - Marketing Digital y Diseño Web",
    template: "%s | Flash y Contenido",
  },
  description: "Agencia de marketing digital especializada en diseño web, gestión de redes sociales, branding y campañas publicitarias. Impulsamos tu presencia digital con creatividad y estrategia.",
  keywords: ["marketing digital", "diseño web", "redes sociales", "branding", "community manager", "páginas web", "campañas publicitarias", "meta ads", "creación de marca", "landing page", "españa"],
  authors: [{ name: "Flash y Contenido" }],
  creator: "Flash y Contenido",
  publisher: "Flash y Contenido",
  metadataBase: new URL("https://www.flashycontenido.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.flashycontenido.com",
    title: "Flash y Contenido - Marketing Digital y Diseño Web",
    description: "Agencia de marketing digital especializada en diseño web, gestión de redes sociales, branding y campañas publicitarias.",
    siteName: "Flash y Contenido",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash y Contenido - Marketing Digital y Diseño Web",
    description: "Agencia de marketing digital especializada en diseño web, gestión de redes sociales, branding y campañas publicitarias.",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pending', // Add Google Search Console verification code later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.classList.add('theme-' + theme);
                } catch (e) {
                  document.documentElement.classList.add('theme-dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <ThemeProvider>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
