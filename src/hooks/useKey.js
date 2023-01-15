import { useEffect } from "react";

const useKey = (value, callback) => {
  // const callbackRef = useRef(callback)

  // useEffect(() => {
  //   callbackRef.current = callback;
  // })
  useEffect(() => {
    const handle = (event) => {
      callback(value, event.key)

    }
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  },[])
}

export default useKey