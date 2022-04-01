import isNumber from './isNumber'
import solve from './solve'
const calculate = (state,event) =>{
  console.log(event)
  if(event === 'C'){
    return {
      total: '',
      before: null,
      operation: null
    }
  }
  if(isNumber(event)){
    return {
      ...state,
      total: state.total + event
    }
  }
  if(event === '.'){
    return state.includes('.') ? state : state + event
  
  }
  if(event === '='){
    console.log('estoy en igual')
    if(state.before){

      console.log('todo')
      console.log(state)
      return{
        ...state,
        total: String(solve({num1:state.before,num2:state.total,operation:state.operation})),
        before: null,
      }
    }
  }
  if(event === '+'){
    if(state.before){
      return{
        ...state,
        total: '',
        before: String(solve({num1:state.before,num2:state.total,operation:state.operation})),
      }
    }
    return{
      ...state,
      before: state.total,
      operation: '+',
      total: ''
    }
  }
  if(event === '+/-'){
    return{
      ...state,
      total: String(-1*(+state.total))
    }
  }
  // if(event === 'X'){
  //   if(state.before){
  //     return{
  //       ...state,
  //       total: '',
  //       before: String(solve({num1:state.before,num2:state.total,operation:state.operation})),
  //     }
  //   }
  //   return{
  //     ...state,
  //     before: state.total,
  //     operation: 'X',
  //     total: ''
  //   }
  // }
  // if(event === '+'){
  //   return 
  // }
  // else{
  //   return event
  // }
  return state
}
export default calculate