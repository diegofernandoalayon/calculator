import './button.css'
export default function Button({children,handleClick,...props}){

  //darkGray, orange, lightGray 
  // props.orange ? console.log('todo'):console.log('nada')
  
  return (
    <>
      <button className="btn orange" onClick={()=> {handleClick(children)}}>{children}</button>
    </>
  )
}