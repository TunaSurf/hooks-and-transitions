import React from 'react'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'

const SpringBall = (props) => {
  return (
    <Spring
      native
      // from not needed with _app.js and eliminates transition on mount
      // from={{
      //   x: props.pathname === '/' ? 0 : 200,
      //   background: props.pathname === '/' ? '#000' : '#FF00FF'
      // }}
      to={{
        x: props.pathname === '/' ? 200 : 0,
        background: props.pathname === '/' ? '#FF00FF' : '#000',
        string: props.pathname === '/' ? 0 : 100
      }}
    >
      {({ x, background, string }) => (
        <Round 
          as={animated.div}
          style={{
            transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
            background
          }} 
        >
          {string.interpolate(str => Math.round(str))}
        </Round>
      )}
    </Spring>
  )
}

export default SpringBall

const Round = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`