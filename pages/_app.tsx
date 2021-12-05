import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {

  useEffect(() => {
	  // ここに全ページ共通で行う処理
      console.log('hgoe')
  },[router.pathname])

  return <Component {...pageProps} />
}

export default MyApp