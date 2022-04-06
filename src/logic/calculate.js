import isNumber from './isNumber'
import solve from './solve'

const RESPONSE = (op, state) => {
  if(state.before){
    return{
      ...state,
      total: '',
      before: String(solve({num1: state.before, num2: state.total, operation: state.operation}))
    }
  }
  return{
    ...state,
    before: state.total,
    operation: op,
    total: ''  
  }
}
const OPERATION = {
  '+': (state) => RESPONSE('+', state),
  '-': (state) => RESPONSE('-', state),
  'X': (state) => RESPONSE('X', state),
  '/': (state) => RESPONSE('/', state)
}

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
      return{
        ...state,
        total: String(solve({num1:state.before,num2:state.total,operation:state.operation})),
        before: null,
      }
    }
  }
  if(event === '%'){
    
    if(state.total && state.operation){ // hacer el caso para el menos, y agregar todas las operaciones para probar el dividiendo
       if(state.operation === '-' || state.operation === '+'){
         return {
           ...state,
           total: String(+state.before + ((+state.before * +state.total)/100)),
           before: null,
           operation: null
         }
       }else if(state.operation === 'X'){
         console.log('estadooo',state)
         return{
           ...state,
           total: String((+state.before * +state.total)/100),
           before: null
           
         }
       }
     }
     return {
       total: String(+state.total/100)
     }
   }

   

  if(event === '+/-'){
    return{
      ...state,
      total: String(-1*(+state.total))
    }
  }
  
  return OPERATION[event] ? OPERATION[event](state) : state

  // if(event === '+'){
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
  //     operation: '+',
  //     total: ''
  //   }
  // }
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

  return state
}
export default calculate