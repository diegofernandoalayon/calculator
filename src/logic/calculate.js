
const calculate = (setState,event) =>{
  if(event === 'C'){
    setState('')
  }
  else{
    setState((e)=>e+event)
  }
}
export default calculate