const OP = {
  '+':(n1, n2)=> n1+n2,
  '-':(n1, n2)=> n1-n2,
  '/':(n1, n2)=> n2!==0 ? n1/n2: 'Math Error',
  'X':(n1, n2)=> n1*n2

}
const res = 'Syntax Error'
const solve = ({num1 = 0, num2, operation = null}={}) => {
  if(num2 === undefined){
    num2 = ((operation === '/' || operation === 'X') ? 1 : 0)
  }
  return OP[operation] 
    ? OP[operation](+num1, +num2)
    : res

}
export default solve 
