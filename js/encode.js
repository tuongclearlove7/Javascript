
console.log("68656c6c6f20776f726c6421".match(/.{1,2}/g).reduce((acc,char)=>acc+String.fromCharCode(parseInt(char, 16)),""))






