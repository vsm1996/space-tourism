/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

import CrewMember from '../CrewMember'

import styles from './Crew.module.scss'

interface ImageProp {
  png: string,
  webp: string,
}

interface CrewProp {
  name: string,
  images: ImageProp,
  role: string,
  bio: string,
}

type AppProps = {
  content: CrewProp[]
}

const Crew = ({ content }: AppProps): JSX.Element => {
  const [currentCrew, changeCurrentCrew] = useState<CrewProp>({
    name: 'Douglas Hurley',
    images: {
      png: '/assets/crew/image-douglas-hurley.png',
      webp: '/assets/crew/image-douglas-hurley.webp',
    },
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  })
  const [currentIndex, setIndex] = useState(0)

  const handleClick = (e: any) => {
    e.preventDefault()

    const newIndex = e.target.value
    const changedCrew = content[newIndex]
    changeCurrentCrew(changedCrew)
    setIndex(newIndex)
  }

  const {
    name, role, bio, images,
  } = currentCrew

  return (
    <section className={styles.crew}>
      <h5 className={styles.crewCTA}>
        Meet your crew
      </h5>
      <CrewMember
        currentIndex={currentIndex}
        role={role}
        name={name}
        bio={bio}
        images={images}
        handleClick={handleClick}
      />
    </section>
  )
}

export default Crew
