import Button from './components/Button'
import Display from './components/Display'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Display value={23}/>
        <Button orange>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </div>
    </div>
  );
}

export default App;
