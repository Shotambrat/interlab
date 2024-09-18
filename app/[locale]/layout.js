import './_styles/globals.css';
import 'antd/dist/reset.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/app/[locale]/_components/Header";
import Footer from "@/app/[locale]/_components/Footer";

export const metadata = {
  title: {
    template: "%s",
    default: "Interlab Innovation"
  },
  description: "Intermed Innovation by Intermed"
}


export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
