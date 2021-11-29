/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'

import styles from './FlexibleContent.module.scss'

// split these up into separate components
const destination = (content: any): JSX.Element => {
  console.log(content)
  return (
    <section>
      <h5 className={styles.destinationCTA}>
        Pick yor destination
      </h5>
      <div>
        <ul>
          {/* Add button element to li */}
          <li>Moon</li>
          <li>Mars</li>
          <li>Europa</li>
          <li>Titan</li>
        </ul>
        <div>
          <Image src='/destination/image-moon.png' width={100} height={100} />
          <h1>Moon</h1>
          <p>
            See our planet as you’ve never seen it before.
            A perfect relaxing trip away to help regain perspective and come back refreshed.
            While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
          </p>
          <div>
            <span>
              <p>
                Avg. Distance
              </p>
            </span>
            <span>
              <p>
                Est. Travel Time
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const FlexibleContent = ({ pathname, dataContent }: any): JSX.Element => {
  let displayContent
  switch (pathname) {
    case 'destination': {
      displayContent = destination(dataContent)
      break
    }
    case 'crew': {
      displayContent = (
        <h1>
          crew
        </h1>
      )
      break
    }
    case 'technology': {
      displayContent = (
        <h1>
          technology
        </h1>
      )
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
