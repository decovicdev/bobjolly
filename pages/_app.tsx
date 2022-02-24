import "../styles/globals.css";

import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../components/shared/Layout";
import theme from "../config/theme";
import stripe from "../config/stripe";
// import Loading from "../components/shared/Loading";
import { ModalProvider } from "../context/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);
  // {isLoading ? (
  //   <Loading />
  // ) :
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bobjolly</title>
      </Head>
      <ChakraProvider theme={theme}>
        <ModalProvider>
          <Layout>
            <Elements stripe={stripe}>
              <Component {...pageProps} />
            </Elements>
          </Layout>
        </ModalProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
