import { useCallback, useState } from "react"
import ButtonPanel from "../../components/ButtonPanel"
import Display from "../../components/Display"
import calculate from "../../logic/calculate"
import useKey from "../../hooks/useKey"

import '../../App.css'

const INITIAL_STATE = {
  total: '',
  before: null,
  operation: null
}

const Calculator = () => {
  const [value, setValue] = useState(INITIAL_STATE)
  // console.log('en calculator', keyPress)
  // useEffect(() => {
  //   console.log('se esta renderizando calculator2')
  //   console.log({'esto es keyPress' : keyPress})
  //   setValue(calculate(value,keyPress))
  // },[])
  
  const handleKeys = useCallback((valuee, key) => {

    // revisar por que no ejecuta nada con el teclado
    // no se esta actualizando el estado
    setValue((a)=> calculate(a,key))
    // setValue(calculate(valuee,key)) -- no funciona porque toma la referencia de cuando se crea.
  },[])
  useKey(value, handleKeys)
  const handleClick = (event) =>{

    setValue(calculate(value,event))
    
  }
  return(
    <div className="App">
      <div className='container'>
        <Display value={value.total || value.before}/>
        <ButtonPanel handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default Calculator