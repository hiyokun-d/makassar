import { render } from '@redwoodjs/testing/web'

import TraditionalCuisinPage from './TraditionalCuisinPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TraditionalCuisinPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TraditionalCuisinPage />)
    }).not.toThrow()
  })
})
