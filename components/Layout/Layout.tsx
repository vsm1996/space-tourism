import Head from 'next/head'

import { NavProvider } from '../../context/NavContext'
import Header from '../Header'

import styles from './Layout.module.scss'

type AppProps = {
  children: JSX.Element
}

const Layout = ({ children }: AppProps): JSX.Element => (
  <NavProvider>
    <div className={styles.layout}>
      <Head>
        <title>Space Tours</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  </NavProvider>
)

export default Layout
