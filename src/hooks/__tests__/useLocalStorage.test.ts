import { describe, it, expect } from 'vitest'
import { getStorageValue } from '../useLocalStorage'

describe('getStorageValue', () => {
    it('returns the stored value when it exists in local storage', () => {
        const key = 'test-key'
        const value = 'test-value'
        localStorage.setItem(key, JSON.stringify(value))
        expect(getStorageValue(key, null)).toBe(value)
    })

    it('returns the default value when the key does not exist in local storage', () => {
        const key = 'non-existent-key'
        const defaultValue = 'default-value'
        expect(getStorageValue(key, defaultValue)).toBe(defaultValue)
    })
})
