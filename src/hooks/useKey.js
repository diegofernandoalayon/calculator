import { useEffect } from 'react'

const useKey = (callback) => {
  // const callbackRef = useRef(callback)

  // useEffect(() => {
  //   callbackRef.current = callback;
  // })
  useEffect(() => {
    const handle = (event) => {
      callback(event.key)
    }
    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle)
  }, [])
}

export default useKey
