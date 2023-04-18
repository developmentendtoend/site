import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import MainLayout from '@/layouts/main.layout'

export default function App({ Component, pageProps }: AppProps) {
  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}
