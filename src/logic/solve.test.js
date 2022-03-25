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