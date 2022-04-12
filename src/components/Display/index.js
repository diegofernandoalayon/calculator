import './display.css'
export default function Display({value}){

  let fontSize = '60px'
  if(value){
    fontSize = value.length < 10 ? '60px' : '40px' 
  }
 
  return (
    <div>
      <div className='display' style={{fontSize:fontSize}}>{value||'0'}</div>
    </div>
  )
}