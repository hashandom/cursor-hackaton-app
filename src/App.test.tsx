import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the project browsing layout with mocked projects', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /hackathon project finder/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/browse available coding projects/i),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /campus food finder/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/aisha khan/i)).toBeInTheDocument()
  })
})
