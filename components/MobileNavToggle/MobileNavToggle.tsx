import Hamburger from '../svgs/Hamburger'

import styles from './MobileNavToggle.module.scss'

const MobileNavToggle = (): JSX.Element => (
  <div className={styles.mobileNavToggle}>
    <button type='button' className={styles.mobileNavToggleBtn}>
      <Hamburger />
    </button>
  </div>
)

export default MobileNavToggle
