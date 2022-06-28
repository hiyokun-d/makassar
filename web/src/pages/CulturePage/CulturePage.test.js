import { render } from '@redwoodjs/testing/web'

import CulturePage from './CulturePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CulturePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CulturePage />)
    }).not.toThrow()
  })
})
