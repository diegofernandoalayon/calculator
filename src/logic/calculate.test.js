import calculate from './calculate'

test('tet',()=> {
  const state = calculate({total: 2, before: null, operation: '+'},'+/-')
  expect(state.total).toBe('-2')
})
test('tetao',()=> {
  const state = calculate({total: 2, before: 2, operation: '+'},'=')
  expect(state.total).toBe('4')
})