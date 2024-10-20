import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import App from '../App'

describe('App', () => {
    it('renders the App component', () => {
        render(<App />)
        screen.debug() // prints out the jsx in the App component unto the command line
    })

    it('should match snapshot', () => {
        const result = render(<App />)
        expect(result).toMatchSnapshot()
    })

    it('renders with default count', () => {
        render(<App />)
        expect(screen.getByText('count is 0')).toBeInTheDocument()
    })

    it('increments count on button click', () => {
        render(<App />)
        const button = screen.getByText('count is 0')
        fireEvent.click(button)
        expect(screen.getByText('count is 1')).toBeInTheDocument()
    })

    it('renders Vite and React logos', () => {
        render(<App />)
        expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
        expect(screen.getByAltText('React logo')).toBeInTheDocument()
    })

    it('renders correct text and classes', () => {
        render(<App />)
        expect(screen.getByText('Vite + React')).toBeInTheDocument()
        expect(
            screen.getByText('Click on the Vite and React logos to learn more')
        ).toBeInTheDocument()
        expect(screen.getByText('count is 0')).toBeInTheDocument()
        expect(
            screen.getByText('Click on the Vite and React logos to learn more')
        ).toBeInTheDocument()
    })
})
