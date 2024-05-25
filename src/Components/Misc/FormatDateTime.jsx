/**
 * Formats a date-time string for display.
 *
 * Function takes a date-time string in ISO 8601 format (aka '2024-05-25T14:30:00Z')
 * and converts it to a localized Czech format: "DD. MM. YYYY HH:MM:SS". 
 * If an invalid or empty date-time string is provided, it returns an empty string.
 *
 * @function
 * 
 * @param {string} [dateString] -  date-time string in ISO 8601 format to be formatted.
 *
 * @returns {string} formatted date-time string in the format "DD. MM. YYYY HH:MM:SS"
 *                   (e.g., "25. 05. 2024 14:30:00") or empty string if the input is invalid or empty.
 */

export const formatDateTime = (dateString) => {
    if (!dateString) return ""; // If dateString is null or undefined, return empty string

    const date = new Date(dateString); // Parse dateString into a Date object

    // Extract day, month, and year components from the Date object
    const day = date.getDate().toString().padStart(2, "0"); // Ensure two digits for day
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Ensure two digits for month (January is 0)
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${day}. ${month}. ${year}  ${hour}:${minute}:${second}`;
};
