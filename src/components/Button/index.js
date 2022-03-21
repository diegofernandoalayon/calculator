import './button.css'
export default function Button({children,...props}){

  //darkGray, orange, lightGray 
  props.orange ? console.log('todo'):console.log('nada')
  console.log(props)
  return (
    <>
      <button className="btn orange">{children}</button>
    </>
  )
}