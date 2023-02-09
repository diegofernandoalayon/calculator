import isNumber from './isNumber'
import solve from './solve'

const RESPONSE = (op, state) => {
  if (state.before) {
    return {
      ...state,
      total: '',
      before: String(solve({ num1: state.before, num2: state.total, operation: state.operation }))
    }
  }
  return {
    ...state,
    before: state.total,
    operation: op,
    total: ''
  }
}
const OPERATION = {
  '+': (state) => RESPONSE('+', state),
  '-': (state) => RESPONSE('-', state),
  x: (state) => RESPONSE('X', state),
  '÷': (state) => RESPONSE('/', state),
  '*': (state) => RESPONSE('X', state),
  '/': (state) => RESPONSE('/', state)
}

const calculate = (state, event) => {
  if (event === 'Backspace') {
    return {
      ...state,
      total: state.total.slice(0, state.total.length - 1)
    }
  }

  if (event === 'C' || event === 'c') {
    return {
      total: '',
      before: null,
      operation: null
    }
  }
  if (isNumber(event)) {
    return {
      ...state,
      total: state.total + event
    }
  }
  if (event === '.') {
    if (!state.total) {
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
  if (event === '=' || event === 'Enter') {
    if (state.before) {
      return {
        ...state,
        total: String(solve({ num1: state.before, num2: state.total, operation: state.operation })),
        before: null
      }
    }
  }
  if (event === '%') {
    if (state.total && state.operation) { // hacer el caso para el menos, y agregar todas las operaciones para probar el dividiendo
      if (state.operation === '+') {
        return {
          ...state,
          total: String(+state.before + ((+state.before * +state.total) / 100)),
          before: null,
          operation: null
        }
      } else if (state.operation === '-') {
        return {
          ...state,
          total: String(+state.before - ((+state.before * +state.total) / 100)),
          before: null,
          operation: null
        }
      } else if (state.operation === 'X' || state.operation === '*') {
        return {
          ...state,
          total: String((+state.before * +state.total) / 100),
          before: null,
          operation: null

        }
      } else if (state.operation === '/') {
        return {
          ...state,
          total: String((+state.before / (+state.total / 100))),
          operation: null,
          before: null
        }
      }
    }
    return {
      total: String(+state.total / 100)
    }
  }

  if (event === '+/-') {
    return {
      ...state,
      total: String(-1 * (+state.total))
    }
  }

  return OPERATION[event] ? OPERATION[event](state) : state
}
export default calculate
