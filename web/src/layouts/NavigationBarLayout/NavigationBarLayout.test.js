import { render } from '@redwoodjs/testing/web'

import NavigationBarLayout from './NavigationBarLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NavigationBarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationBarLayout />)
    }).not.toThrow()
  })
})
