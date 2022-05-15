/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  usePathState,
} from '../../context/NavContext'

import styles from './Technology.module.scss'

interface ImageProp {
  png: string,
  webp: string,
}

interface TechnologyProp {
  name: string,
  iamges: ImageProp,
  description: string,
  distance: string,
  travel: string
}

type AppProps = {
  content: TechnologyProp[]
}

const Technology = ({ content }: any): JSX.Element => {
  const [currentTechnology, changeCurrentTechnology] = useState({
    name: 'Launch vehicle',
    images: {
      portrait: '/assets/technology/image-launch-vehicle-portrait.jpg',
      landscape: '/assets/technology/image-launch-vehicle-landscape.jpg',
    },
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  })

  const [currentIndex, setIndex] = useState(0)

  const handleClick = (e: any) => {
    e.preventDefault()

    const newIndex = e.target.value
    const changedCrew = content[newIndex]

    changeCurrentTechnology(changedCrew)
    setIndex(newIndex)
  }

  const { name, description, images } = currentTechnology

  return (
    <section className={styles.tech}>
      <h5 className={styles.techCTA}>
        Space Launch 101
      </h5>
      <div className={styles.techContent}>
        <div className={styles.techTextWrapper}>
          <ul className={styles.techList}>
            {/* Add button element to li */}
            <li className={styles.techListItem}>
              <button
                type='button'
                onClick={handleClick}
                value={0}
                className={styles.techListItemBtn}
              >
                1
              </button>
            </li>
            <li className={styles.techListItem}>
              <button
                type='button'
                onClick={handleClick}
                value={1}
                className={styles.techListItemBtn}
              >
                2
              </button>
            </li>
            <li className={styles.techListItem}>
              <button
                type='button'
                onClick={handleClick}
                value={2}
                className={styles.techListItemBtn}
              >
                3
              </button>
            </li>
          </ul>
          <div className={styles.techTextContent}>
            {/* give navText mixin */}
            <p className={styles.techIntro}>
              The Terminology...
            </p>
            <h3 className={styles.techTitle}>
              {name}
            </h3>
            <p className={styles.techDesc}>
              {description}
            </p>
          </div>
        </div>
        <div className={styles.techImgWrapper}>
          <Image
            src={images.portrait}
            className={styles.techImg}
            width={515}
            height={527}
          />
        </div>
      </div>
    </section>
  )
}

export default Technology
