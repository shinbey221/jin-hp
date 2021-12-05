import React from 'react';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    // ここに全ページ共通で行う処理
    console.log('hgoe');
  }, [router.pathname]);

  return <Component {...pageProps} />;
};

export default MyApp;
