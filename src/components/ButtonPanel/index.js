import Button from "../Button";

export default function ButtonPanel({handleClick}){

  return(
    <>
      <div className='panel'>
        <div>
          <Button handleClick={handleClick}>C</Button>
          <Button handleClick={handleClick}>+/-</Button>
          <Button handleClick={handleClick}>%</Button>
          <Button handleClick={handleClick}>/</Button>
        </div>
        <div>
          <Button handleClick={handleClick}>7</Button>
          <Button handleClick={handleClick}>8</Button>
          <Button handleClick={handleClick}>9</Button>
          <Button handleClick={handleClick}>X</Button>
        </div>
        <div>
          <Button handleClick={handleClick}>4</Button>
          <Button handleClick={handleClick}>5</Button>
          <Button handleClick={handleClick}>6</Button>
          <Button handleClick={handleClick}>-</Button>
        </div>
        <div>
          <Button handleClick={handleClick}>1</Button>
          <Button handleClick={handleClick}>2</Button>
          <Button handleClick={handleClick}>3</Button>
          <Button handleClick={handleClick}>+</Button>
        </div>
        <div>
          <Button handleClick={handleClick}>0</Button>
          <Button handleClick={handleClick}>.</Button>
          <Button handleClick={handleClick}>=</Button>
        </div>
      </div>
    </>
  )
}