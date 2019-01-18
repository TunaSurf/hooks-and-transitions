import React, { useState, useEffect, useCallback } from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import { Spring, Transition, animated, interpolate } from 'react-spring'

import Layout from '../components/Layout.js'

const boxes = [
  'red',
  'green',
  'yellow',
  'blue'
]

const Page = props => {
  const[ open, setOpen ] = useState(undefined)
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = open ? `${open} expanded!` : 'Click a box to expand'
  })

  const [ position, setPosition ] = useState({x: 0, y: 0})

  const toggle = useCallback((e, key) => {
    const { x, y } = e.target.getBoundingClientRect();
    setOpen(open === key ? undefined : key)
    setPosition({x, y})
  })

  const update = useCallback((item) => {
    const isOpen = open === item
    return {
      opacity: open && !isOpen ? 0 : 1,
      width: isOpen ? '100vw' : '50vw',
      height: isOpen ? '100vh' : '20vh',
      x: isOpen ? position.x : 0,
      y: isOpen ? position.y : 0,
    }
  })

  return (
    <Layout>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
      <Transition
        native
        items={boxes}
        from={{ opacity: 0 }}
        leave={{ opacity: 0 }}
        enter={update}
        update={update}

      >
        {item => ({ opacity, width, height, x, y }) => (
          <Box
            as={animated.div}
            bg={item}
            style={{
              opacity,
              width,
              height,
              transform: interpolate(
                [x, y],
                (x, y) => `translate3d(-${x}px,-${y}px,0)`
              )
            }}
            onClick={e => toggle(e, item)}
          />
        )}
      </Transition>
    </Layout>
  )
}

export default withRouter(Page)

const Box = styled.div`
  width: 300px;
  height: 200px;
  background: ${props => props.bg};
  position: relative;
  margin: 10px 0;
`