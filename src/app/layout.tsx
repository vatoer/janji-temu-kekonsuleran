import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
