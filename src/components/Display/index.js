export default function Display({value}){

 
  return (
    <div>
      <div style={{color:'white',fontSize:'40px'}}>{value||'0'}</div>
    </div>
  )
}