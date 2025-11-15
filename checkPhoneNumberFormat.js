const phoneNumber = [
  "+923012345678",
  "03012345678",
  "9203012345678",
  "923012345678",
  "+9203012345678",
  "+923301234567",
  "3012345678",
  "00123456789",
  "+9230123456",
];

const correctFormat = []

for (let i = 0; i < phoneNumber.length; i++){
    let num = phoneNumber[i];
    let matched = false;

    if (num.length >= 10 && num.length <= 14) {

        if (num.length == 13 && num[0] == '+' && num[3] !== '0') {
            correctFormat.push(num);
            matched = true;
        }

        if (num.length == 11 && num[0] === '0'){
            correctFormat.push("+92" + num.slice(1));
            matched = true;
        }

        if (num.length == 14 && num[0] == '+' && num[3] == '0') {
            correctFormat.push(num.slice(0,3) + num.slice(4));
            matched = true;
        }

        if (num.length == 12 && num[0] == '9') {
            correctFormat.push("+" + num);
            matched = true;
        }

        if (num.length == 10 && num[0] == '3') {
            correctFormat.push("+92" + num);
            matched = true;
        }

        if (!matched) {
            console.log("wrong no", num)
        }
        
    } else {
        console.log("invalid number", num)
    }
}

console.log("Correct Format is >>>>")
console.log(correctFormat)




Output
```
wrong no 9203012345678
wrong no +9230123456
Correct Format is >>>>
[
  '+923012345678',
  '+923012345678',
  '+923012345678',
  '+923012345678',
  '+923301234567',
  '+923012345678',
  '+920123456789'
]

=== Code Execution Successful ===

```
