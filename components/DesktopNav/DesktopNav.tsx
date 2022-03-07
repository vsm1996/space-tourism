/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link'

import styles from './DesktopNav.module.scss'

import {
  usePathSet,
} from '../../context/NavContext'

const DesktopNav = (): JSX.Element => {
  const pathSet = usePathSet()

  const handlePathChange = (e: any): void => {
    const setPath = e.target.textContent.toLowerCase()
    pathSet(setPath)
  }

  return (
    <nav className={styles.desktopNav}>
      <ul className={styles.desktopNavList}>
        <li className={styles.desktopNavListItem}>
          <Link href='/' passHref>
            <span
              className={styles.desktopNavListLink}
              onClick={handlePathChange}
              role='button'
              tabIndex={0}
            >
              00
              <span className={styles.desktopNavListItemText}>
                Home
              </span>
            </span>
          </Link>
        </li>
        <li className={styles.desktopNavListItem}>
          <Link href='/destination' passHref>
            <span
              className={styles.desktopNavListLink}
              onClick={handlePathChange}
              role='button'
              tabIndex={-1}
            >
              01
              <span className={styles.desktopNavListItemText}>
                Destination
              </span>
            </span>
          </Link>
        </li>
        <li className={styles.desktopNavListItem}>
          <Link href='/crew' passHref>
            <span
              className={styles.desktopNavListLink}
              onClick={handlePathChange}
              role='button'
              tabIndex={-2}
            >
              02
              <span className={styles.desktopNavListItemText}>
                Crew
              </span>
            </span>
          </Link>
        </li>
        <li className={styles.desktopNavListItem}>
          <Link href='/technology' passHref>
            <span
              className={styles.desktopNavListLink}
              onClick={handlePathChange}
              role='button'
              tabIndex={-3}
            >
              03
              <span className={styles.desktopNavListItemText}>
                Technology
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNav
