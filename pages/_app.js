import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>CodeyEvents</title>
        <meta name='description' content='Find your next developer event near you!' />
        <meta name="viewport" content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp
