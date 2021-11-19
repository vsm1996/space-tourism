import cx from 'classnames'
import Link from 'next/link'

import { useNavState, useNavSet } from '../../context/NavContext'
import Close from '../svgs/Close'

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
        <li className={styles.mobileNavBtnItem}>
          <button type='button' onClick={handleClick} className={styles.mobileNavBtn}>
            <Close />
          </button>
        </li>
        <li className={styles.mobileNavListItem}>
          <Link href='/' passHref>
            <span className={styles.mobileNavListLink}>
              00
              <span className={styles.mobileNavListItemText}>
                Home
              </span>
            </span>
          </Link>
        </li>
        <li className={styles.mobileNavListItem}>
          <Link href='/destination' passHref>
            <span className={styles.mobileNavListLink}>
              01
              <span className={styles.mobileNavListItemText}>
                Destination
              </span>
            </span>
          </Link>
        </li>
        <li className={styles.mobileNavListItem}>
          <Link href='/crew' passHref>
            <span className={styles.mobileNavListLink}>
              02
              <span className={styles.mobileNavListItemText}>
                Crew
              </span>
            </span>
          </Link>
        </li>
        <li className={styles.mobileNavListItem}>
          <Link href='/technology' passHref>
            <span className={styles.mobileNavListLink}>
              03
              <span className={styles.mobileNavListItemText}>
                Technology
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav
