import React from 'react'
import styled from 'styled-components'

const StyledBall = (props) => {
  return (
    <Round
      path={props.pathname}
    />
  )
}

export default StyledBall

const Round = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #FF00FF;
  transform: translate3d(200px,0,0);
  transition: 1s all ease;

  ${props => {
    if(props.path !== '/') {
      return `
        background: #000;
        transform: translate3d(0,0,0);
      `
    }
  }}
`