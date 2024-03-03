import { Layout as DefaultLayout } from '@/components/Layout';

import 'focus-visible'
import "@/styles/tailwind.css";

export default function App({ Component, pageProps }) {

  const Layout = Component.Layout ?? DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}