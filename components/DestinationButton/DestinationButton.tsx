import cx from 'classnames'

import styles from './DestinationButton.module.scss'

type AppProps ={
  handleClick: any,
  index: number,
  label: string,
  currentIndex: number,
}
const DestinationButton = ({
  handleClick, index, label, currentIndex,
}: AppProps): JSX.Element => (
  <button
    type='button'
    onClick={handleClick}
    value={index}
    className={cx(
      styles.destinationButton,
      {
        // eslint-disable-next-line eqeqeq
        [styles.destinationButton__active]: currentIndex == index,
      },
    )}
  >
    {label}
  </button>
)

export default DestinationButton
