function palindrome(str) {
    //removing non-alphanumetric characters and convert to lowercase
    const cleaningStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    //comparing characters from the beginning and end of the string
    for(let i =0; i < Math.floor(cleaningStr.length / 2); i ++){
      if(cleaningStr[i] != cleaningStr[cleaningStr.length -1 - i]){
        return false;
      }
    }
    return true;
}
palindrome("eye");