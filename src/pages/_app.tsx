import { GoogleTagManager } from "@next/third-parties/google";

export default function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(<><Component {...pageProps} />
  <GoogleTagManager gtmId="GTM-KCMH8CTR" /></>);
}
