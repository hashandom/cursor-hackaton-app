import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the hello world page', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /hello world/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/hackathon project finder/i)).toBeInTheDocument()
  })
})
