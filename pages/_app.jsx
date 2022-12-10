import Head from "next/head";
import "../styles/styles.css";
import localFont from '@next/font/local'

const hnow = localFont({ 
  src: [
    {
      path: '../public/fonts/hnow-medium/HelveticaNowDisplay-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
  ]
})

const stigfier = localFont({ 
  src: [
    {
      path: '../public/fonts/stigfier/Stigfier.woff2',
      weight: '400',
      style: 'normal',
    },
  ]
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${hnow.className} ${stigfier.className}`}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <Component {...pageProps} />
   </div>
  )
}