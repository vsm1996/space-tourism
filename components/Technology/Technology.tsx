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
      portrait: './assets/technology/image-launch-vehicle-portrait.jpg',
      landscape: './assets/technology/image-launch-vehicle-landscape.jpg',
    },
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  })

  const changeTechnology = (newTechnology: number) => {
    // const destinationData: any = content[newDestination]
  }

  const handleClick = (e: any) => {
    e.preventDefault()

    changeCurrentTechnology(content[e.target.value])
  }

  const { name, description } = currentTechnology

  return (
    <section>
      <h5 className={styles.technologyCTA}>
        Space Launch 101
      </h5>
      <div>
        <ul>
          {/* Add button element to li */}
          <li>
            <button type='button' onClick={handleClick} value={0}>
              01 Launch vehicle
            </button>
          </li>
          <li>
            <button type='button' onClick={handleClick} value={1}>
              02 Spaceport
            </button>
          </li>
          <li>
            <button type='button' onClick={handleClick} value={2}>
              03 Space capsule
            </button>
          </li>
        </ul>
        <div>
          {/* give navText mixin */}
          <h3>
            {name}
          </h3>
          <p>
            {description}
          </p>
          <Image src='/destination/image-moon.png' width={100} height={100} />
        </div>
      </div>
    </section>
  )
}

export default Technology
