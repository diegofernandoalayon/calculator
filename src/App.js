import {useState} from 'react'
import Display from './components/Display'
import './App.css'
import ButtonPanel from './components/ButtonPanel';
import calculate from './logic/calculate';

const INITIAL_STATE = {
  total: '',
  before: null,
  operation: null
}

function App() {
  const [value, setValue] = useState(INITIAL_STATE)
  const handleClick = (event) =>{
    setValue(calculate(value,event))
    
  }
  console.log(value.total)
  return (
    <div className="App">
      <div className='container'>
        <Display value={value.total}/>
        <ButtonPanel handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
