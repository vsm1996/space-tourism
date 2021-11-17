import Link from 'next/link'

import styles from './DesktopNav.module.scss'

const DesktopNav = (): JSX.Element => (
  <nav className={styles.desktopNav}>
    <ul className={styles.desktopNavList}>
      <li className={styles.desktopNavListItem}>
        <Link href='/' passHref>
          <span>
            00 Home
          </span>
        </Link>
      </li>
      <li className={styles.desktopNavListItem}>
        <Link href='/destination' passHref>
          <span>
            01 Destination
          </span>
        </Link>
      </li>
      <li className={styles.desktopNavListItem}>
        <Link href='/crew' passHref>
          <span>
            02 Crew
          </span>
        </Link>
      </li>
      <li className={styles.desktopNavListItem}>
        <Link href='/technology' passHref>
          <span>
            03 Technology
          </span>
        </Link>
      </li>
    </ul>
  </nav>
)

export default DesktopNav
