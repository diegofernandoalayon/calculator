import solve from './solve'

describe('add',()=> {
    test('two numbers', ()=>{
    
      const res = solve({num1:1,num2:4,operation:'+'})
      expect(res).toBe(5)
    })
    test('one number and Zero', ()=> {
      const res = solve({num1:2,num2:0,operation:'+'})
      expect(res).toBe(2)
    })
    test('zero and one number', ()=> {
      const res = solve({num1:0,num2:45,operation:'+'})
      expect(res).toBe(45)
    })
    test('only the first number', ()=> {
      const res = solve({num1: 44, operation:'+'})
      expect(res).toBe(44)
    })
    test('only the second number', ()=> {
      const res = solve({num2:8, operation: '+'})
      expect(res).toBe(8)
    })
    test('without any number', ()=> {
      const res = solve({operation: '+'})
      expect(res).toBe(0)
    })
})

describe('subtraction',() => {
  test('two numbers',() => {
    const res = solve({num1:3,num2:1,operation:'-'})
    expect(res).toBe(2)
  })
  test('one number and zero',() => {
    const res = solve({num1:3,num2:0,operation:'-'})
    expect(res).toBe(3)
  })
  test('zero and one number',() => {
    const res = solve({num1:0, num2:1,operation:'-'})
    expect(res).toBe(-1)
  })
  test('only the first number', ()=> {
    const res = solve({num1: 44, operation:'-'})
    expect(res).toBe(44)
  })
  test('only the second number', ()=> {
    const res = solve({num2:8, operation: '-'})
    expect(res).toBe(-8)
  })
  test('without any number', ()=> {
    const res = solve({operation: '-'})
    expect(res).toBe(0)
  })
})

describe('mutiply', ()=> {
  test('two numbers',() => {
    const res = solve({num1:3,num2:1,operation:'X'})
    expect(res).toBe(3)
  })
  test('one number and zero',() => {
    const res = solve({num1:3,num2:0,operation:'X'})
    expect(res).toBe(0)
  })
  test('zero and one number',() => {
    const res = solve({num1:0, num2:1,operation:'X'})
    expect(res).toBe(0)
  })
  test('only the first number', ()=> {
    const res = solve({num1: 44, operation:'X'})
    expect(res).toBe(44)
  })
  test('only the second number', ()=> {
    const res = solve({num2:8, operation: 'X'})
    expect(res).toBe(0)
  })
  test('without any number', ()=> {
    const res = solve({operation: 'X'})
    expect(res).toBe(0)
  })
})

describe('division', ()=> {
  test('two numbers',() => {
    const res = solve({num1:3,num2:1,operation:'/'})
    expect(res).toBe(3)
  })
  test('one number and zero',() => {
    const res = solve({num1:3,num2:0,operation:'/'})
    expect(res).toBe('Math Error')
  })
  test('zero and one number',() => {
    const res = solve({num1:0, num2:1,operation:'/'})
    expect(res).toBe(0)
  })
  test('only the first number', ()=> {
    const res = solve({num1: 44, operation:'/'})
    expect(res).toBe(44)
  })
  test('only the second number', ()=> {
    const res = solve({num2:8, operation: '/'})
    expect(res).toBe(0)
  })
  test('without any number', ()=> {
    const res = solve({operation: '/'})
    expect(res).toBe(0)
  })
})
describe('Syntax Error', () => {
  test('no operation', ()=> {
    const res = solve({num1:2,num2:3})
    expect(res).toBe('Syntax Error')
  })
})