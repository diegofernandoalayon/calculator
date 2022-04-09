import Button from "../Button";
import './buttonPanel.css'
export default function ButtonPanel({handleClick}){

  return(
    <>
      <div className='panel'>
        
          <Button handleClick={handleClick} lightGray>C</Button>
          <Button handleClick={handleClick} lightGray>+/-</Button>
          <Button handleClick={handleClick} lightGray>%</Button>
          <Button handleClick={handleClick} orange>/</Button>
        
       
          <Button handleClick={handleClick}>7</Button>
          <Button handleClick={handleClick}>8</Button>
          <Button handleClick={handleClick}>9</Button>
          <Button handleClick={handleClick} orange>X</Button>
        
        
          <Button handleClick={handleClick}>4</Button>
          <Button handleClick={handleClick}>5</Button>
          <Button handleClick={handleClick}>6</Button>
          <Button handleClick={handleClick} orange>-</Button>
        
        
          <Button handleClick={handleClick}>1</Button>
          <Button handleClick={handleClick}>2</Button>
          <Button handleClick={handleClick}>3</Button>
          <Button handleClick={handleClick} orange>+</Button>
        
        
          <Button handleClick={handleClick} wide>0</Button>
          <Button handleClick={handleClick}>.</Button>
          <Button handleClick={handleClick} orange>=</Button>
        
      </div>
    </>
  )
}