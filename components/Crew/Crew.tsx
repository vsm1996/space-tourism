/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  usePathState,
} from '../../context/NavContext'

import styles from './Crew.module.scss'

interface ImageProp {
  png: string,
  webp: string,
}

interface CrewProp {
  name: string,
  iamges: ImageProp,
  description: string,
  distance: string,
  travel: string
}

type AppProps = {
  content: CrewProp[]
}

const Crew = ({ content }: any): JSX.Element => {
  const [currentCrew, changeCurrentCrew] = useState({
    name: 'Douglas Hurley',
    images: {
      png: './assets/crew/image-douglas-hurley.png',
      webp: './assets/crew/image-douglas-hurley.webp',
    },
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  })

  const handleClick = (e: any) => {
    e.preventDefault()

    changeCurrentCrew(content[e.target.value])
  }

  const { name, role, bio } = currentCrew

  return (
    <section className={styles.crew}>
      <h5 className={styles.crewCTA}>
        Meet your crew
      </h5>
      <div>
        <div>
          <h4>
            { role }
          </h4>
          <h1>
            { name }
          </h1>
          <p>
            {bio}
          </p>
          <Image src='/destination/image-moon.png' width={100} height={100} />
        </div>
        <ul>
          {/* Add button element to li */}
          <li>
            <button type='button' onClick={handleClick} value={0}>
              Douglas Hurley
            </button>
          </li>
          <li>
            <button type='button' onClick={handleClick} value={1}>
              Mark Shuttleworth
            </button>
          </li>
          <li>
            <button type='button' onClick={handleClick} value={2}>
              Victor Glover
            </button>
          </li>
          <li>
            <button type='button' onClick={handleClick} value={3}>
              Anousheh Ansari
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Crew
