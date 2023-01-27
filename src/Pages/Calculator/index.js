import { useCallback, useState } from "react"
import ButtonPanel from "../../components/ButtonPanel"
import Display from "../../components/Display"
import calculate from "../../logic/calculate"
import useKey from "../../hooks/useKey"
import debounce from "just-debounce-it"

import '../../App.css'

const INITIAL_STATE = {
  total: '',
  before: null,
  operation: null
}

const Calculator = () => {
  const [value, setValue] = useState(INITIAL_STATE)

  // const handleDoubleClick = debounce((key='Backspace') => setValue((a)=> calculate(a,'Backspace')),200)
  const handleDoubleClick = useCallback(debounce((_key='Backspace') => {
    setValue((a)=> calculate(a,'Backspace'))
  },200),[])
  
  const handleKeys = useCallback((_valuee, key) => {

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
        <Display value={value.total || value.before} handleDoubleClick={handleDoubleClick}/>
        <ButtonPanel handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default Calculator