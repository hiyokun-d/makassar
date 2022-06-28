import { Link, routes } from '@redwoodjs/router'

const NavigationBarLayout = ({ children }) => {
  return (
    <>
      <div id="navigator">
        <nav>
          <ul>
            <li>
              <Link to={routes.traditionalCuisin()}>Traditional Cuisine</Link>
            </li>
            <li>
              <Link to={routes.history()}>history</Link>
            </li>
            <li>
              <Link to={routes.culture()}>culture</Link>
            </li>
            <li>
              <Link to={routes.home()}>home</Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </>
  )
}

export default NavigationBarLayout
