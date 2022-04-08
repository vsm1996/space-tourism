/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import cx from 'classnames'
import Image from 'next/image'

import DestinationButton from '../DestinationButton'

import styles from './Destination.module.scss'

interface ImageProp {
  png: string,
  webp: string,
}

interface DesintationProp {
  name: string,
  images: ImageProp,
  description: string,
  distance: string,
  travel: string
}

type AppProps = {
  content: DesintationProp[]
}

const Destination = ({ content }: any): JSX.Element => {
  const [currentDestination, changeCurrentDestination] = useState({
    index: 0,
    name: 'Moon',
    images: {
      png: '/assets/destination/image-moon.png',
      webp: '/assets/destination/image-moon.webp',
    },
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travel: '3 days',
  })

  const handleClick = (e: any) => {
    e.preventDefault()

    const dataIndex = e.target.value

    const destinationData: any = content[dataIndex]
    destinationData.index = dataIndex
    changeCurrentDestination(destinationData)
  }

  const {
    name, description, distance, travel, index, images,
  } = currentDestination

  return (
    <section className={styles.destination}>
      <h5 className={styles.destinationCTA}>
        Pick yor destination
      </h5>
      <div className={styles.destinationContentWrap}>
        <div className={styles.destinationImageWrap}>
          <Image src={images.png} width={445} height={445} layout='responsive' />
        </div>
        <div className={styles.destinationTextWrap}>
          <ul
            className={cx(
              styles.destinationList,
            )}
          >
            <li
              className={cx(
                styles.destinationListItem,
              )}
            >
              <DestinationButton
                handleClick={handleClick}
                currentIndex={index}
                index={0}
                label='Moon'
              />
            </li>
            <li
              className={cx(
                styles.destinationListItem,
              )}
            >
              <DestinationButton
                handleClick={handleClick}
                currentIndex={index}
                index={1}
                label='Mars'
              />
            </li>
            <li
              className={cx(
                styles.destinationListItem,
              )}
            >
              <DestinationButton
                handleClick={handleClick}
                currentIndex={index}
                index={2}
                label='Europa'
              />
            </li>
            <li
              className={cx(
                styles.destinationListItem,
              )}
            >
              <DestinationButton
                handleClick={handleClick}
                currentIndex={index}
                index={3}
                label='Titan'
              />
            </li>
          </ul>
          <div className={styles.destinationTextContent}>
            <h1 className={styles.destinationHeader}>
              {name}
            </h1>
            <p className={styles.destinationDescription}>
              {description}
            </p>
            <div className={styles.destinationTravelWrap}>
              <span className={styles.destinationTravelSpan}>
                <p className={styles.destinationTravelHeader}>
                  Avg. Distance
                </p>
                {' '}
                <p className={styles.destinationTravelValue}>
                  {distance}
                </p>
              </span>
              <span className={styles.destinationTravelSpan}>
                <p className={styles.destinationTravelHeader}>
                  Est. Travel Time
                </p>
                {' '}
                <p className={styles.destinationTravelValue}>
                  {travel}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination
