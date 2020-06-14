function alphabetSort(message){
    // wirte your code here
    if (typeof message == 'string') {
            var messageArray = message.split('');
            //按字符编码排序
            var result = messageArray.sort();
            return result.join('');
        } else {
            console.log('input is not string');
        }
  }
var result = alphabetSort('hello'); // should return 'ehllo'
console.log(result);