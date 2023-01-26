// components
import FullScreenButton from '../FullScreenButton'
// styles
import './display.css'

export default function Display({value, handleDoubleClick}){

  let fontSize = '60px'
  if(value){
    fontSize = value.length < 9 ? '60px' :  value.length<13 ? '40px' : '25px' 
  }

  const DisplayValue = (value) => {
    
    if(value.length > 3){
      const [value1,value2] = value.split('.')
      const newValue = value1.split('')
      .reverse()
      .map((n,i) => i%3=== 0 ? `${n},`:n)
      .reverse()
      .join('')
      if(value.includes('.')){
        return newValue.substr(0, newValue.length-1)+'.'+value2
      } 
      return newValue.substr(0, newValue.length-1)
    }
    return value
  }
 
  return (
    <div className='container-display'>
      <div className='container-btn-fullscreen'>
        <FullScreenButton />
      </div>
      <div 
        className='display' 
        style={{fontSize:fontSize}}
        onDoubleClick={handleDoubleClick}
        onTouchMove={handleDoubleClick}
        >
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