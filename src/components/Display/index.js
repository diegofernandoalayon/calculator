export default function Display({value}){

  let fontSize = '60px'
  if(value){
    fontSize = value.length < 10 ? '60px' : '40px' 
  }
 
  return (
    <div>
      <div style={{color:'white',fontSize:fontSize, textAlign: 'right', padding: '20px', height: '15vh', display: 'flex', justifyContent:'flex-end', alignItems: 'center'}}>{value||'0'}</div>
    </div>
  )
}