import {useState} from 'react'
import Display from './components/Display'
import './App.css'
import ButtonPanel from './components/ButtonPanel';

function App() {
  const [value, setValue] = useState('')
  const handleClick = (event) =>{
    console.log(event)
    setValue(event)
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
