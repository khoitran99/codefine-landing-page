import { cleanup, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import App from './App'

describe('landing page routing', () => {
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    window.history.pushState({}, '', '/')
  })

  it('renders the Home Page route with navigation to target pages', () => {
    render(<App />)
    const mainNav = screen.getByRole('navigation', { name: /main/i })

    expect(
      screen.getByRole('heading', {
        name: /ai-driven it outsourcing & software development/i,
      }),
    ).toBeInTheDocument()
    expect(within(mainNav).getByRole('link', { name: /^services$/i }))
      .toHaveAttribute('href', '/services')
    expect(within(mainNav).getByRole('link', { name: /^about us$/i }))
      .toHaveAttribute('href', '/about')
  })

  it('renders the All Services route from its direct URL', () => {
    window.history.pushState({}, '', '/services')

    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /every service you need to ship software that scales/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/built to cover every stage of your roadmap/i))
      .toBeInTheDocument()
  })

  it('renders the About Us route from its direct URL', () => {
    window.history.pushState({}, '', '/about')

    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /your trusted partner in custom software development/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/codefine at a glance/i)).toBeInTheDocument()
  })

  it('renders core structured sections across the target pages', () => {
    const { rerender } = render(<App />)

    expect(
      screen.getByRole('heading', { name: /web app development/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/discovery & scoping/i)).toBeInTheDocument()

    window.history.pushState({}, '', '/about')
    rerender(<App />)

    expect(screen.getAllByText(/nguyen hoai phong/i).length).toBeGreaterThan(0)
    expect(
      screen.getByText(/got a roadmap that needs shipping/i),
    ).toBeInTheDocument()
  })
})
