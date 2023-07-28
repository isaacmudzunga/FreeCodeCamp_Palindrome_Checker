function rot13(str) {
    // Create an array to store the transformed characters
    let result = [];
  
    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
      // Get the ASCII code of the character
      let charCode = str.charCodeAt(i);
  
      // Check if the character is a uppercase letter (A-Z)
      if (charCode >= 65 && charCode <= 90) {
        // Apply the ROT13 transformation for uppercase letters
        // Add 13 to the character code and make sure it wraps around if it exceeds 'Z' (90)
        charCode = ((charCode - 65 + 13) % 26) + 65;
      }
      // Check if the character is a lowercase letter (a-z)
      else if (charCode >= 97 && charCode <= 122) {
        // Apply the ROT13 transformation for lowercase letters
        // Add 13 to the character code and make sure it wraps around if it exceeds 'z' (122)
        charCode = ((charCode - 97 + 13) % 26) + 97;
      }
  
      // Convert the character code back to the corresponding letter
      result.push(String.fromCharCode(charCode));
    }
  
    // Join the array of characters back into a string and return the result
    return result.join("");
}
  
  
rot13("SERR PBQR PNZC");
  