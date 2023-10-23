import type { AppProps } from 'next/app'
import React from 'react'
import 'src/main.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({Component, pageProps}: AppProps) {

    const activeChain = "mumbai";
    return(
        <ThirdwebProvider
          activeChain={activeChain}
          clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
        >
            <Component {...pageProps} />
        </ThirdwebProvider>
    )
}