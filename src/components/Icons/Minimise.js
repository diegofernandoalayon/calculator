const Minimise = (props) => (
  <svg
    height={21}
    width={21}
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={props.stroke || 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 17.5v-5h-5M17.5 12.5h-5v5M3.5 8.5h5v-5M12.5 3.5v5h5" />
    </g>
  </svg>
)

export default Minimise
