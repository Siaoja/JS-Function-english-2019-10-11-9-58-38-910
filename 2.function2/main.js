function palindrome(message) {
    let flag;
    // wirte your code here
    //反转字符串
    function reverseString(message) {
        // wirte your code here
        if (typeof message == 'string') {
            var stack = [];
            for (let i = message.length; i >= 0; i--) {
                stack.push(message[i]);
            }
            return stack.join('');
        } else {
            console.log('input is not string');
        }

    }
    if (typeof message == 'string') {
        let reverseMessage = reverseString(message);
        if (message == reverseMessage) {
            return true;
        } else {
            return false;
        }
    } else {
        console.log('input is not string');
    }
}
var result1 = palindrome('hello'); // should return false
var result2 = palindrome('abcba'); // should return true
console.log(result1 + '  ' + result2);