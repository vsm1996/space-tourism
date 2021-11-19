import Image from 'next/image'
import Link from 'next/link'

import Icon from '../../public/assets/shared/icon-hamburger.svg'
import DesktopNav from '../DesktopNav'
import MobileNav from '../MobileNav'
import MobileNavToggle from '../MobileNavToggle'
import Hamburger from '../svgs/Hamburger'
import styles from './Header.module.scss'

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <div className={styles.logoWrap}>
      <Link href='/' passHref>
        <Image src='/assets/shared/logo.svg' width={40} height={40} />
      </Link>
    </div>
    <MobileNavToggle />
    <MobileNav />
    <DesktopNav />
  </header>
)

export default Header
