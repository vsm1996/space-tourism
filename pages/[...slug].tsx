import { useRouter, withRouter } from 'next/router'
import type { NextPage } from 'next'

import data from '../lib/data.json'

import {
  usePathState,
} from '../context/NavContext'

import FlexibleContent from '../components/FlexibleContent'
import Layout from '../components/Layout'

import styles from './Slug.module.scss'

const Page: NextPage = (props) => {
  const path = usePathState()

  const { asPath } = useRouter()

  const pathname = asPath.substring(1)
  const dataTypeUnset: any = data
  const infoPackage: any = dataTypeUnset[`${pathname}`]

  return (
    <Layout>
      <>
        <FlexibleContent pathname={pathname} dataContent={infoPackage} />
      </>
    </Layout>
  )
}

export default withRouter(Page)
