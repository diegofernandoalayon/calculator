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
    if(!state.total){
      return {
        ...state,
        total: '0.'
      }
    }
    return {
      ...state,
      total: state.total.includes('.') ? state.total : state.total + event
    }
  
  }
  if(event === '='){
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

  if(event === '+/-'){
    return{
      ...state,
      total: String(-1*(+state.total))
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
  if(event === '%'){ // revisar operaciones
    
    if(state.total){
      return{
        ...state,
        total: String(solve({num1:state.total, num2: '100', operation: '/'}))
      }
    }else if(state.total && state.operation){
      return{
        ...state,
        total: String(solve({num1:state.before,num2:state.total,operation:state.operation})),
        before: null,
      }
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