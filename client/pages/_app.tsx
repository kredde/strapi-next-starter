import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { setupAxios } from '../lib/setup';
import { NextIntlProvider } from 'next-intl';

setupAxios();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
