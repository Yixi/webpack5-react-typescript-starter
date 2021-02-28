import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '@root/components/Header/index'
import { MemoryRouter } from 'react-router-dom'

describe('test Header component', () => {
  test('should render correct', () => {
    const wrapper = render(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()

  })
})
