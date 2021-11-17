import { useNavState, useNavSet } from '../../context/NavContext/index'
import Hamburger from '../svgs/Hamburger'

import styles from './MobileNavToggle.module.scss'

const MobileNavToggle = (): JSX.Element => {
  const navSet = useNavSet()
  const { isOpen } = useNavState()

  const handleClick = (): void => {
    navSet({ isOpen: !isOpen })
  }

  return (
    <div className={styles.mobileNavToggle}>
      <button type='button' className={styles.mobileNavToggleBtn} onClick={handleClick}>
        <Hamburger />
      </button>
    </div>
  )
}

export default MobileNavToggle
