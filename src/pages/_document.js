import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="init-code"
          strategy="beforeInteractive"
        >{`window.PERMAR_ID="975459083773181963"`}</Script>
        <Script
          strategy="beforeInteractive"
          id="ab-test"
          src="https://cdn.permar.xyz/scripts/dp/bundle.min.js"
        />
        {/* <Script src="/static/script.js" strategy="lazyOnload"></Script> */}
        {/* <Script id="vwoCode" strategy="beforeInteractive">
        
        </Script> */}
      </body>
    </Html>
  );
}
