/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'

import styles from './CrewMember.module.scss'

interface ImageProp {
  png: string,
  webp: string,
}

type AppProps = {
  currentIndex: number,
  role: string,
  name: string,
  bio: string,
  handleClick: (e: any) => void,
  images: ImageProp
}
const CrewMember = ({
  currentIndex,
  role,
  name,
  bio,
  handleClick,
  images,
}: AppProps): JSX.Element => (
  <div className={styles.crewContentWrap}>
    <div className={styles.crewInfoWrap}>
      <div>
        <h4 className={styles.crewRole}>
          { role }
        </h4>
        <h1 className={styles.crewName}>
          { name }
        </h1>
        <p className={styles.crewBio}>
          {bio}
        </p>
      </div>
      <ul className={styles.crewList}>
        <li className={styles.crewListItem}>
          <button
            type='button'
            onClick={handleClick}
            value={0}
          >
            D
          </button>
        </li>
        <li className={styles.crewListItem}>
          <button
            type='button'
            onClick={handleClick}
            value={1}
          >
            M
          </button>
        </li>
        <li className={styles.crewListItem}>
          <button
            type='button'
            onClick={handleClick}
            value={2}
          >
            V
          </button>
        </li>
        <li className={styles.crewListItem}>
          <button
            type='button'
            onClick={handleClick}
            value={3}
          >
            A
          </button>
        </li>
      </ul>
    </div>
    <div className={styles.crewImgWrap}>
      <Image
        src={images.png}
        width={568}
        height={712}
        layout='responsive'
      />
    </div>
  </div>
)

export default CrewMember
