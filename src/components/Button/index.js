import './button.css'
export default function Button ({ children, handleClick, ...props }) {
  let className = 'btn '
  if (props?.orange) {
    className += 'orange '
  } else if (props?.lightGray) {
    className += 'lightGray '
  } else {
    className += 'darkGray '
  }
  if (props.wide) {
    className += 'wide'
  }

  // darkGray, orange, lightGray
  // props.orange ? console.log('todo'):console.log('nada')
  const fontS = children.length > 1 ? '1.5rem' : '2rem'
  return (
    <>
      <button style={{ fontSize: fontS }} className={className} onClick={() => { handleClick(children) }}>{children}</button>
    </>
  )
}
