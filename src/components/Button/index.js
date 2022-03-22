import './button.css'
export default function Button({children,handleClick,...props}){

  //darkGray, orange, lightGray 
  // props.orange ? console.log('todo'):console.log('nada')
  const fontS = children.length>1 ? '1.5rem':'2rem'
  return (
    <>
      <button style={{fontSize:fontS}} className="btn orange" onClick={()=> {handleClick(children)}}>{children}</button>
    </>
  )
}