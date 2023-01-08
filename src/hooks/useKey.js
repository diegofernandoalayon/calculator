import { useEffect } from "react";

const useKey = (value, callback) => {
  // const callbackRef = useRef(callback)

  // useEffect(() => {
  //   callbackRef.current = callback;
  // })
  useEffect(() => {
    const handle = (event) => {
      console.log(event.key)
      callback(value, event.key)

    }
    document.addEventListener('keypress', handle);
    return () => document.removeEventListener('keypress', handle);
  },[])
  // return [queso]
}

export default useKey