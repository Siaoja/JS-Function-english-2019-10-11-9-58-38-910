function reverseString(message){
    // wirte your code here
    if(typeof message == 'string'){
        var stack = [];
        for(let i = message.length; i>=0; i--){
            stack.push(message[i]);
        }
        return stack.join('');
    }else{
        console.log('input is not string');
    }

  }
 var result = reverseString('hello'); // should return 'olleh'
 console.log(result);