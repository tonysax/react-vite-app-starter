/**
 * Converts a given string to a boolean value.
 * If the string is 'true' (case-insensitive), returns true.
 * Otherwise, returns false.
 * @param str the string to convert
 * @returns the converted boolean value
 */
export default function stringToBoolean(
    str: string | undefined
): boolean | null {
    return str?.toLowerCase() === 'true'
        ? true
        : str === undefined
          ? false
          : false
}
