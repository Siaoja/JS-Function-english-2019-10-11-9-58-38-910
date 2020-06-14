function countWords(message){
    // wirte your code here
    if (typeof message == 'string') {
            var messageArray = message.split(' ');
            
            return messageArray.length;
        } else {
            console.log('input is not string');
        }
  }
var result = countWords('Good morning, I love JavaScript.'); // should return 5
console.log(result);