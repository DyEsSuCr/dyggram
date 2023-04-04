import { useState, useEffect } from 'react'

export function useWindowsSize () {
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleSize = () => {
      setSize(window.innerWidth)
    }

    window.addEventListener('resize', handleSize)
  }, [])

  return { size }
}
