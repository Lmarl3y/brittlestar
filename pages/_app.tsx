import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Brittlestar | Wine Bar & Coffee House in Morecambe Bay</title>
        <meta name="description" content="Relax at Brittlestar, a chilled wine bar and coffee house by the bay in Morecambe. Enjoy fine wines, specialty coffees, and a relaxed atmosphere with a sea view." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 