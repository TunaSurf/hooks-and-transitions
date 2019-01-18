import React, { useState, useEffect, useCallback } from 'react'
import { useGesture } from 'react-with-gesture'

const Counter = () => {
  const [ count, setCount ] = useState(0)
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  const [ handlers, { down, x, y, xDelta, yDelta, xInitial, yInitial } ] = useGesture()
  useEffect(() => {
    console.log(handlers)
  })

  const handleClick = useCallback(() => {
    setCount(count + 1)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button >
      <div {...handlers}>Drag me - coordinates: {x} {y}</div>
    </div>
  )
}

export default Counter
