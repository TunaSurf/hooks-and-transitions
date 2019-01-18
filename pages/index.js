import React, { useState, useCallback  } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'

import Layout from '../components/Layout'
import Search from '../components/Search'

const posts = [
  'Hello Next.js',
  'Learn Next.js is awesome',
  'Deploy apps with Zeit',
  'Creating search query filters',
  'Making pancakes',
  'Next stop Hollywood',
  'What are we making for breakfast next?'
]

const Index = () => {
  const [ query, setQuery ] = useState('')

  const searchPosts = useCallback((e) => {
    const newQuery = e.target.value.toLowerCase()
    setQuery(newQuery)
  })

  return (
    <Layout>
      <Search searchPosts={searchPosts} />
      <List>
        <Transition
          native
          items={posts.filter(post => post.toLowerCase().includes(query))}
          from={{ opacity: 0, height: 0, padding: 0, marginBottom: 0 }}
          enter={{ opacity: 1, height: 'auto', padding: 10, marginBottom: 5 }}
          leave={{ opacity: 0, height: 0, padding: 0, marginBottom: 0 }}
        >
          {item => props =>
            <Post
              as={animated.li}
              style={props}
            >
              <Link href={`/post?title=${item}`} passHref>
                <a>{item}</a>
              </Link>
            </Post>
          }
        </Transition>
      </List>
    </Layout>
  )
}

export default Index

const List = styled.ul`
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;
  list-style: none;
`
const Post = styled.li`
  padding: 0;
  margin: 0;
  box-shadow: 0px 4px 18px -6px rgba(0,0,0,0.4);
  overflow: hidden;
`