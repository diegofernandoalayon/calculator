export default function Display({value}){

 
  return (
    <div>
      <div style={{color:'white',fontSize:'40px', textAlign: 'right', padding: '20px'}}>{value||'0'}</div>
    </div>
  )
}