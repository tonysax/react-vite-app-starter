import '@testing-library/jest-dom/vitest'
import { afterAll, afterEach, beforeAll, beforeEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { worker } from './src/mocks/server'

beforeAll(() => {
    worker.listen()
})

beforeEach(() => {
    window.localStorage.clear()
})

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup()
    worker.resetHandlers()
})

afterAll(() => {
    worker.close()
})
