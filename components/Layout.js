import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div
      style={{
        width: '100vw',
        padding: '20px',
        boxSizing: 'border-box'
      }}
    >
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <h1>My Blog</h1>
      {children}
    </div>
  )
}

export default Layout
