import stringToBoolean from '../utils'
import { describe, it, expect } from 'vitest'
/**
 * Tests for the stringToBoolean function
 * @returns void
 */
describe('stringToBoolean', () => {
    it('should return true if the input is "true"', () => {
        expect(stringToBoolean('true')).toBe(true)
    })

    it('should return true if the input is "TRUE"', () => {
        expect(stringToBoolean('TRUE')).toBe(true)
    })

    it('should return true if the input is "TrUe"', () => {
        expect(stringToBoolean('TrUe')).toBe(true)
    })

    it('should return false if the input is "false"', () => {
        expect(stringToBoolean('false')).toBe(false)
    })

    it('should return false if the input is "FALSE"', () => {
        expect(stringToBoolean('FALSE')).toBe(false)
    })

    it('should return false if the input is "FaLsE"', () => {
        expect(stringToBoolean('FaLsE')).toBe(false)
    })

    it('should return null if the input is undefined', () => {
        expect(stringToBoolean(undefined)).toBe(false)
    })

    it('should return null if the input is an empty string', () => {
        expect(stringToBoolean('')).toBe(false)
    })

    it('should return null if the input is a non-empty string', () => {
        expect(stringToBoolean('hello')).toBe(false)
    })
})
