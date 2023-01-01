import './display.css'
export default function Display({value}){

  let fontSize = '60px'
  if(value){
    fontSize = value.length < 10 ? '60px' : '40px' 
  }

  const DisplayValue = (value) => {
    if(value.includes('.')) return value
    if(value.length > 3){
      const newValue = value.split('')
                             .reverse()
                             .map((n,i) => i%3=== 0 ? `${n},`:n)
                             .reverse()
                             .join('')
                             
      return newValue.substr(0, newValue.length-1)
    }
    return value
  }
 
  return (
    <div>
      <div 
        className='display' 
        style={{fontSize:fontSize}}>
          {
            value 
              ? 
              DisplayValue(value)
              : '0'
          }
      </div>
    </div>
  )
}