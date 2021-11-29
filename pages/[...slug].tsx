import { useRouter } from 'next/router'
import type { NextPage } from 'next'

import * as data from '../lib/data.json'

import FlexibleContent from '../components/FlexibleContent'
import Layout from '../components/Layout'

import styles from './Slug.module.scss'

const Page: NextPage = () => {
  const { asPath } = useRouter()
  const pathname = asPath.substring(1)
  const dataTypeUnset: any = data
  const infoPackage: any = dataTypeUnset[pathname]

  return (
    <Layout>
      <>
        <div className={styles.contentContainer}>
          <div className={styles.page}>
            <FlexibleContent pathname={pathname} dataContent={infoPackage} />
          </div>
        </div>
      </>
    </Layout>
  )
}
export default Page
