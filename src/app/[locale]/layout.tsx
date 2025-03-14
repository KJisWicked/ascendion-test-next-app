import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import TanstackProvider from "@/providers/tanstackProvider";
import ResponsiveNavbar from "@/features/common/components/responsive-navbar";
import Footer from "@/features/common/components/footer";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jin Fei Jin",
  description: "Jin Fei Jin",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  /**
   * Tell Next.js which language to use for this page and its content can
   * directly use the useTranslations() hook without needing to manually pass the locale again.
   */
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <TanstackProvider>
            <ResponsiveNavbar />
            {children}
            <Footer />
          </TanstackProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
