import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

type BlogLayoutProps = {
  children: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li>
              <button onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? `Log Out (${currentUser.email})` : 'Log In'}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
