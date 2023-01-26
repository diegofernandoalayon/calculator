// React
import { useState } from 'react'

// components
import FullScreen from "../Icons/FullScreen";
import Minimise from "../Icons/Minimise";

// styles
import './fullscreenbutton.css'

const FullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleScreen = () => {
    const element = document.documentElement
    if(window.innerHeight === window.screen.height){
      document.exitFullscreen()
      setIsFullScreen(false)
    }else{
      element.requestFullscreen()
      setIsFullScreen(true)
    }
  }
  return (
    <>
      <button
        className='btn-fullscreen'
        onClick={handleScreen}
      >
        {
          !isFullScreen
          ? <FullScreen/>
          : <Minimise />
        }

      </button>
    </>
  );
};

export default FullScreenButton
