// @module Projects
/**
 * Formats a floating-point number for display.
 *
 * Function takes a floating-point number and converts it to a localized string
 * with two decimal places, 
 * If no number is provided, it returns an empty string.
 *
 * @function
 * 
 * @param {number} [numberFloat] - The floating-point number to format,
 * undefined, null, or not provided => empty string
 * 
 * @returns {string} The formatted number as a string with two decimal places and grouping separators or empty string
 * @function
 */

export const formatNumber = (numberFloat) => {
    if (!numberFloat) return "";
    
    return numberFloat.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true
    });
};
