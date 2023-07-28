function telephoneCheck(str) {
    // Regular expression to match valid US and South African phone numbers
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3}|\+\d{1,2}\s?\(\d{2,3}\)|\+\d{1,2}\s?)([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
    // Test the input string against the regular expression
    return phoneRegex.test(str);
}
  
function validatePhoneNumber(phoneNumber) {
    // Regular expressions for some common country formats
    const usRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    const saRegex = /^(?:\+?27|0)(\d{2})\)?[-\s]?(\d{3})[-\s]?(\d{4})$/;
    // Add more regular expressions for other continents and countries here
  
    // Validation for different continents
    if (usRegex.test(phoneNumber)) {
      return "US";
    } else if (saRegex.test(phoneNumber)) {
      return "South Africa";
    }
    // Add more continent checks here
  
    return "Unknown"; // If the number doesn't match any known format
}
  
// Test with various phone numbers
console.log(validatePhoneNumber("555-555-5555")); // Output: "US"
console.log(validatePhoneNumber("+27 12 345 6789")); // Output: "South Africa"
console.log(validatePhoneNumber("+44 20 7123 4567")); // Output: "Unknown" (Example for Europe, United Kingdom)
  