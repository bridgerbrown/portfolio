import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
            <link rel="icon" type="image/x-icon" href="/b-favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            <link rel="stylesheet" href="https://use.typekit.net/ugk8hvo.css"/>
            <script src="https://kit.fontawesome.com/86ad898daa.js" crossorigin="anonymous"></script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}