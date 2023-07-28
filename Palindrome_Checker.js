function palindrome(str) {
    const cleaningStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for(let i =0; i < Math.floor(cleaningStr.length / 2); i ++){
      if(cleaningStr[i] != cleaningStr[cleaningStr.length -1 - i]){
        return false;
      }
    }
    return true;
  
  }
  
  palindrome("eye");