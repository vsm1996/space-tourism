/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'

import Destination from '../Destination'
import Crew from '../Crew'
import Technology from '../Technology'

import styles from './FlexibleContent.module.scss'

// split these up into separate components
const destination = (content: any): JSX.Element => <Destination content={content} />

const crew = (content: any): JSX.Element => <Crew content={content} />

const technology = (content: any): JSX.Element => <Technology content={content} />

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const FlexibleContent = ({ pathname, dataContent }: any): JSX.Element => {
  let displayContent

  switch (pathname) {
    case 'destination': {
      displayContent = destination(dataContent)
      break
    }
    case 'crew': {
      displayContent = crew(dataContent)
      break
    }
    case 'technology': {
      displayContent = technology(dataContent)
      break
    }
    default: displayContent = <div />
  }
  return (
    <div className={styles.flexibleLayout}>
      {displayContent}
    </div>
  )
}

export default FlexibleContent
