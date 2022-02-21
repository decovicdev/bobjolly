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
import Loading from "../components/shared/Loading";
import { ModalProvider } from "../context/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(
          `"${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}"`,
          undefined,
          {
            autoConfig: true,
            debug: true,
          }
        ); // facebookPixelId
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
