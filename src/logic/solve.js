const OP = {
  '+':(n1, n2)=> n1+n2,
  '-':(n1, n2)=> n1-n2,
  '/':(n1, n2)=> n2!==0 ? n1/n2: 'Math Error',
  '*':(n1, n2)=> n1*n2

}
const res = 'Syntax Error'
const solve = (num1, num2, operation) => {
  return OP[operation] 
    ? OP[operation](num1, num2)
    : res

}
export default solve 
