import type { AppProps } from 'next/app'
import React from 'react'
import 'src/main.css'


export default function App({Component, pageProps}: AppProps) {

    return <Component {...pageProps} />
}