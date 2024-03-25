import { GoogleTagManager } from "@next/third-parties/google";
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(<><Component {...pageProps} />
  <GoogleTagManager gtmId="GTM-KCMH8CTR" /><Script
        src="https://cdnjs.com/libraries/bodymovin"
        onLoad={() => {
          console.log('Script has loaded')
        }}
      /></>);
}
