import Link from 'next/link'

import styles from './DesktopNav.module.scss'

const DesktopNav = (): JSX.Element => (
  <nav className={styles.desktopNav}>
    <ul className={styles.desktopNavList}>
      <li className={styles.desktopNavListItem}>
        <Link href='/' passHref>
          <span className={styles.desktopNavListLink}>
            00
            <span className={styles.desktopNavListItemText}>
              Home
            </span>
          </span>
        </Link>
      </li>
      <li className={styles.desktopNavListItem}>
        <Link href='/destination' passHref>
          <span className={styles.desktopNavListLink}>
            01
            <span className={styles.desktopNavListItemText}>
              Destination
            </span>
          </span>
        </Link>
      </li>
      <li className={styles.desktopNavListItem}>
        <Link href='/crew' passHref>
          <span className={styles.desktopNavListLink}>
            02
            <span className={styles.desktopNavListItemText}>
              Crew
            </span>
          </span>
        </Link>
      </li>
      <li className={styles.desktopNavListItem}>
        <Link href='/technology' passHref>
          <span className={styles.desktopNavListLink}>
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

export default DesktopNav
