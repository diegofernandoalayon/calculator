// import { useRef, useEffect } from 'react'

// const useTimeOut = (callback, delay) => {
//   const stableCallback = useRef(callback)
//   useEffect(() => {
//     stableCallback.current = callback;
//   },[callback])

//   useEffect(() => {
//     const tick = () => stableCallback.current();

//     if(typeof delay !== 'number') return

//     const t = setTimeout(tick, delay)

//     return () => clearTimeout(t)
//   },[delay])
//   return{
//     fun: t
//   }
// }

const useTimeOut = () => {

  //   const t = (callback, delay)=> setTimeout(callback, delay)
  //   useEffect(() => {
  //     // t(callback, delay)
  //     return () => clearInterval(t)
  //   },[])
  //   const funTimeout = (callback, delay) => {
  //     t(callback, delay)
  //     return clearTimeout(t)
  //   }

//   return funTimeout
}
export default useTimeOut

// tratar de hacer que esto sea algo parecido a el just-debounce-it

// necesito funcion que se ejecute externamente
// debe tener useEffect para evitar que se vuelva loco,
//
