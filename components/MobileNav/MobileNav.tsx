import cx from 'classnames'
import Link from 'next/link'

import { useNavState, useNavSet } from '../../context/NavContext'

import styles from './MobileNav.module.scss'

const MobileNav = (): JSX.Element => {
  const { isOpen } = useNavState()
  const navSet = useNavSet()

  const handleClick = (): void => {
    navSet({ isOpen: false })
  }

  return (
    <nav className={cx(styles.mobileNav, { [styles.mobileNav__active]: isOpen })}>
      <ul className={styles.mobileNavList}>
        <li>
          <button type='button' onClick={handleClick}>X</button>
        </li>
        <li>
          <Link href='/' passHref>
            <span>
              00 Home
            </span>
          </Link>
        </li>
        <li>
          <Link href='/destination' passHref>
            <span>
              01 Destination
            </span>
          </Link>
        </li>
        <li>
          <Link href='/crew' passHref>
            <span>
              02 Crew
            </span>
          </Link>
        </li>
        <li>
          <Link href='/technology' passHref>
            <span>
              03 Technology
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav
