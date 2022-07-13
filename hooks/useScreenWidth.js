import { useState, useEffect } from 'react'

export default function useScreenWidth() {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [screenWidth, setScreenWidth] = useState() 


  useEffect(() => {
    const handleScreenSizeChange = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleScreenSizeChange)
    return () => window.removeEventListener('resize', handleScreenSizeChange)
  }, []);

  return screenWidth;
}