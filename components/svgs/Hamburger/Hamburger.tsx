type Props = {
  className?: string,
}

const Hamburger = ({ className }: Props): JSX.Element => (
  <svg className={className} width='24px' height='21px'>
    <g fill='#D0D6F9'>
      <path d='M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z' />
    </g>
  </svg>
)

Hamburger.defaultProps = {
  className: 'null',
}

export default Hamburger
