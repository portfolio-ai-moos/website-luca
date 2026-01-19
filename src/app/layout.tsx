import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "../styles/globals.css";
import { LanguageProvider } from "@/lib/language";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Luscombe Lifestyle - Transformeer je lichaam én je leven",
  description: "Professionele online coaching en personal training voor duurzame resultaten. Luca helpt je jouw persoonlijke doelen te bereiken.",
  keywords: "personal training, online coaching, fitness, fysiotherapie, rotterdam, luscombe lifestyle",
  authors: [{ name: "Luca Luscombe" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Luscombe Lifestyle",
    description: "Transformeer je lichaam én je leven",
    type: "website",
    locale: "nl_NL",
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
