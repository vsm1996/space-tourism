import Link from 'next/link'

import styles from './DesktopNav.module.scss'

const DesktopNav = (): JSX.Element => (
  <nav className={styles.desktopNav}>
    <ul className={styles.desktopNavList}>
      <li className={styles.desktopNavListItem}>
        <Link href='/' passHref>
          <a href='/' className={styles.desktopNavListLink}>
            00
            <span className={styles.desktopNavListItemText}>
              Home
            </span>
          </a>
        </Link>
      </li>
      <li className={styles.desktopNavListItem}>
        <Link href='/destination' passHref>
          <a href='/destination' className={styles.desktopNavListLink}>
            01
            <span className={styles.desktopNavListItemText}>
              Destination
            </span>
          </a>
        </Link>
      </li>
      <li className={styles.desktopNavListItem}>
        <Link href='/crew' passHref>
          <a href='/crew' className={styles.desktopNavListLink}>
            02
            <span className={styles.desktopNavListItemText}>
              Crew
            </span>
          </a>
        </Link>
      </li>
      <li className={styles.desktopNavListItem}>
        <Link href='/technology' passHref>
          <a href='/technology' className={styles.desktopNavListLink}>
            03
            <span className={styles.desktopNavListItemText}>
              Technology
            </span>
          </a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default DesktopNav
