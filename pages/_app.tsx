import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { NavProvider } from '../context/NavContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <NavProvider>
      <Component {...pageProps} />
    </NavProvider>
  )
}
export default MyApp
