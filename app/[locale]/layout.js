import './_styles/globals.css';
import 'antd/dist/reset.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/app/[locale]/_components/Header";
import Footer from "@/app/[locale]/_components/Footer";
import CallToAction from './_components/Modals/CallToAction';
import Script from 'next/script';

export const metadata = {
  title: {
    template: "%s",
    default: "Interlab Innovation"
  },
  description: "Intermed Innovation by Intermed",
  icons: {
    icon: '/favicon.ico'
  },
  manifest: '/manifest.json'
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          <CallToAction locale={locale} />
          
          {/* Яндекс.Метрика */}
          <Script
            id="yandex-metrika"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(98667284, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  ecommerce:"dataLayer"
              });
              `,
            }}
          />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/98667284"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>

          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
