import "../styles/globals.css";

import { useState } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../components/shared/Layout";
import theme from "../config/theme";
import stripe from "../config/stripe";
import Loading from "../components/shared/Loading";
import { ModalProvider } from "../context/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bobjolly</title>
      </Head>

      {isLoading ? (
        <Loading />
      ) : (
        <ChakraProvider theme={theme}>
          <ModalProvider>
            <Elements stripe={stripe}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Elements>
          </ModalProvider>
        </ChakraProvider>
      )}
    </>
  );
}

export default MyApp;
