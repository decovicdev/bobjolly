import "../styles/globals.css";

import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import Head from "next/head";

import Layout from "../components/shared/Layout";
import theme from "../config/theme";
import stripe from "../config/stripe";
import Loading from "../components/shared/Loading";
import { useRouter } from "next/router";

//https://youtu.be/QAdtc7VWuNE?t=162 GOOGLE ANALYTICS INSTALLATION

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const router = useRouter();

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
          <Elements stripe={stripe}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Elements>
        </ChakraProvider>
      )}
    </>
  );
}

export default MyApp;
