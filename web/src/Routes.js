// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import NavigationBar from 'src/layouts/NavigationBarLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavigationBar}>
        <Route path="/culture" page={CulturePage} name="culture" />
        <Route path="/history" page={HistoryPage} name="history" />
        <Route path="/tradtional%20cuisin" page={TraditionalCuisinPage} name="traditionalCuisin" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
