import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta
            property='og:description'
            content='Send someone a silly birthday song!'
          />
          <meta
            name='twitter:image'
            content='https://bobjolly.com/images/opengraph.jpeg'
          />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Bob Jolly' />
          <meta property='og:url' content='https://bobjolly.com' />
          <meta property='theme-color' content='#000000' />
          <meta
            property='og:image'
            content='https://bobjolly.com/images/opengraph.jpeg'
          />
          <meta
            name='description'
            content='Bob Jolly Send someone a silly birthday song!'
          />
          <meta
            name='twitter:description'
            content='Send someone a silly birthday song!'
          />
          <meta
            name='facebook-domain-verification'
            content='qayqd41i2h75teyy1qi6aet3ic1m17'
          />
          <link rel='icon' type='image/x-icon' href='/images/favicon.jpeg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
