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
import Script from "next/script";
import router from "next/router";

//https://youtu.be/QAdtc7VWuNE?t=162 GOOGLE ANALYTICS INSTALLATION

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("143022007863352", undefined, {
          autoConfig: true,
          debug: true,
        }); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
