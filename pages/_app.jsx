import Head from "next/head";
import "../styles/styles.css";
import localFont from '@next/font/local'

const stigfier = localFont({src: '/../public/fonts/stigfier/Stigfier.woff2'})


export default function MyApp({ Component, pageProps }) {
  return (
    <div className={stigfier.className}>
     <Component {...pageProps} />
   </div>
  )
}