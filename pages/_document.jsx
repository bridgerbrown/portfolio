import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
        <Head>
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            <link rel="stylesheet" href="https://use.typekit.net/ugk8hvo.css"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}