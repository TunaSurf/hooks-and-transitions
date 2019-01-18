import React from 'react'
import App, { Container } from 'next/app'

import Animations from "../components/Animations";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    
    return (
      <Container>
        <Animations pathname={this.props.router.pathname} />
        <Component {...pageProps} />
      </Container>
    )
  }
}
