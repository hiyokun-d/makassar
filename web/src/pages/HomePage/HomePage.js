import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div id="header">
        <h1>
          <a href="https://id.wikipedia.org/wiki/Makassar">Makassar</a>
        </h1>
        <img src="/makassar-icon.jpeg" alt="makassar"></img>

        <blockquote>
          <p>
            <i>
              &quot; The city of{' '}
              <a href="https://id.wikipedia.org/wiki/Makassar">Makassar</a> is a
              city of culture and history.It is a city of people.&quot;
            </i>
          </p>
        </blockquote>

        <nav>
          <ul>
            <li>
              <Link to={routes.traditionalCuisin()}>Traditional cuisine</Link>
            </li>
            <li>
              <Link to={routes.history()}>history</Link>
            </li>
            <li>
              <Link to={routes.culture()}>culture</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default HomePage
