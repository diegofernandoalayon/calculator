import {useState} from 'react'
import Display from './components/Display'
import './App.css'
import ButtonPanel from './components/ButtonPanel';
import calculate from './logic/calculate';

function App() {
  const [value, setValue] = useState('')
  const handleClick = (event) =>{
    calculate(setValue,event)
  }
  return (
    <div className="App">
      <div className='container'>
        <Display value={value}/>
        <ButtonPanel handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
