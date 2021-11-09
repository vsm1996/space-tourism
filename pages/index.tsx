import type { NextPage } from 'next'

import Layout from '../components/Layout'

import styles from './index.module.scss'

const Home: NextPage = () => (
  <Layout>
    <>
      <div className={styles.contentContainer}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeader}>
            <span className={styles.heroPreheader}>
              SO, YOU WANT TO TRAVEL TO
            </span>
            SPACE
          </h1>
          <p className={styles.heroText}>
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit back,
            and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
      </div>
    </>
  </Layout>
)

export default Home
