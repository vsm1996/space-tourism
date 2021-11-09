import Image from 'next/image'

import Icon from '../../public/assets/shared/icon-hamburger.svg'
import MobileNavToggle from '../MobileNavToggle'
import styles from './Header.module.scss'

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <div className={styles.logoWrap}>
      <Image src='/assets/shared/logo.svg' width={40} height={40} />
    </div>
    <MobileNavToggle />
  </header>
)

export default Header
