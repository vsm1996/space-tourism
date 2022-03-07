/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  usePathState,
} from '../../context/NavContext'

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
    name: 'Moon',
    images: {
      png: './assets/destination/image-moon.png',
      webp: './assets/destination/image-moon.webp',
    },
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travel: '3 days',
  })

  const handleClick = (e: any) => {
    e.preventDefault()

    const destinationData: any = content[e.target.value]
    changeCurrentDestination(destinationData)
  }

  const { name } = currentDestination

  return (
    <section className={styles.destination}>
      <h5 className={styles.destinationCTA}>
        Pick yor destination
      </h5>
      <Image src='/destination/image-moon.png' width={100} height={100} />
      <div>
        <ul>
          {/* Add button element to li */}
          <li>
            <button type='button' onClick={handleClick} value={0}>
              Moon
            </button>
          </li>
          <li>
            <button type='button' onClick={handleClick} value={1}>
              Mars
            </button>
          </li>
          <li>
            <button type='button' onClick={handleClick} value={2}>
              Europa
            </button>
          </li>
          <li>
            <button type='button' onClick={handleClick} value={3}>
              Titan
            </button>
          </li>
        </ul>
        <div>
          <h1>{name}</h1>
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

export default Destination
