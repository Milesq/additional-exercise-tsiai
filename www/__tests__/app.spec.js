import { render } from '@testing-library/svelte'
import App from '../src/App.svelte'

describe('App component', () => {
  it('display props', () => {
    const doc = render(App, { name: 'Hello' })

    expect(doc.container).toHaveTextContent('Hello')
  })
})
