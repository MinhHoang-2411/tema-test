import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";
import { Providers } from "@/lib/redux/Provider";
import "./globals.css";
import RootHeader from "../components/RootHeader/RootHeader";
import RootFooter from "../components/RootFooter/RootFooter";

export const metadata: Metadata = {
  title: "Tema test",
  description: "From minhoang24fe.dev@gmail.com",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale: localeFromPath } = await params;
  const locale = !routing.locales.includes(localeFromPath as any)
    ? routing.defaultLocale
    : localeFromPath;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="rootContainer">
              <div className="header">
                <div className="container">
                  <RootHeader />
                </div>
              </div>
              <div>{children}</div>
              <RootFooter />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
