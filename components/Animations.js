import React from 'react'

import SpringBall from './SpringBall'
import StyledBall from './StyledBall'

const Animations = props => {
  return (
    <>
      <SpringBall pathname={props.pathname} />
      <StyledBall pathname={props.pathname} />
    </>
  )
}

export default Animations
