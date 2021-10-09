// function test2 () {
//     return "Branch N1"
// }

// function test('should ', async () => {
    
// })
// branch TEST3

// function factorial(n) {
//     if (n==0) {
//         return -1
//     }
//     else if (n==1) {
//         return 1
//     } else {
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(5));

function piglatin(str) {
    let vowels = ["a","e","i","o","u"];
    //console.log(str[0], str);
    for (let i=0; i< str.length; i++) {
        //if (vowels.includes.(str[0]) )
        if (str[0].match(vowels) ) {
            
            return str + "way";
        }
        if (vowels.includes(str[i])) {
            let constClust =str.substr(0,i);
            let rest = str.substr(i);
            return rest + constClust + "ay"
        }
    }
    return str + "ay"

}


console.log(piglatin("oybek"));
console.log(piglatin("kayumov"));
console.log(piglatin("glove"));
console.log(piglatin("rythm"));