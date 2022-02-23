// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       let num = args[0];
//           for (let i = 1; i < args.length; i++){
//               if (args[i] < args[i - 1]){
//                   num = args[i];
//           } else {
//               num = args[i-1];
//           }
//       }
//       return num;
//     }
//   }

// function getSum( a,b ){
//     let array = [];
//     let sum = 0; 
//     if (a === b){
//         return a;  
//         } else if (a < b){
//         for (let i = a; i <= b; i++){
//             array.push(i);
//         }
//         for (let i = 0; i < array.length; i++){
//         sum = sum + array[i];
//         }
//         } else if (b < a){
//         for (let i = b; i <= a; i++){
//             array.push(i)
//         }
//         for (let i = 0; i < array.length; i++){
//             sum = sum + array[i];
//         }
//     }
//     return sum;
// }

// let a = -1;
// let b = 1;
// a.
// getSum(a,b);



// function squareDigits(num){
//     let numString = num.toString();
//     let numStringSquare = [];
//     let number;
//     for (let i of numString){
//       number = Number(i)
//       number = number**2
//       numStringSquare.push(number)
//     }
//     return numStringSquare.join('');
//   }

//   let num1 = 919;
// //   squareDigits(num1);

// let numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

// highAndLow(numbers);
// function highAndLow(numbers){
//     let ogNumbers = numbers;
//     let numString = '';
//     let numStringArray = [];
//     let spot1 = 0;
//     let spot2 = 0;
//     let highString = '';
//     let lowString = '';
//     let stringToNum = 0;
//     for (let i = 0; i < numbers.length; i++){
//        if (numbers[i] === ' '){
//         spot2 = i; 
//         numString = ogNumbers.slice(spot1, spot2);
//         numStringArray.push(numString);
//         spot1 = i+1;
//         ogNumbers = numbers;
//        } else if (i === numbers.length-1){
//         spot2 = i+1; 
//         numString = ogNumbers.slice(spot1, spot2);
//         numStringArray.push(numString);
//         // spot1 = i+1;
//         // ogNumbers = numbers;
//        }
//     }
//     let high = Number(numStringArray[0]);
//     let low = Number(numStringArray[0])
//     for (let i = 1; i < numStringArray.length; i++){
//         stringToNum = Number(numStringArray[i]);
//       if (high > stringToNum){
//         high = high;
//       } else {
//         high = stringToNum;
//       }
//       if (low < stringToNum){
//         low = low;
//       } else {
//         low = stringToNum;
//       }
//     }
//     highString = high.toString();
//     lowString = low.toString();
//     return highString + ', ' + lowString;
//   }

// function getMiddle(s){
//     let middle = '';
//     let spot1 = 0;
//     let spot2 = 0;
//     if (s.length % 2 === 0){
//       spot1 = (s.length / 2) - 1;
//       spot2 = spot1 +2;
//       middle = s.slice(spot1, spot2);
//     } else {
//       spot1 = (s.length - 1) / 2;
//       spot2 = spot1 + 1;
//       middle = s.slice(spot1, spot2);
//     }
//     return middle;
//   }



// findShort("Let's travel abroad shall we");

// function findShort(s){
//     let stringArray = [];
//     let ogString = s;
//     let spot1 = 0;
//     let spot2 = 0;
//     let newString = '';
//     for (let i = 0; i < s.length; i++){
//       if (s[i] === ' '){
//         spot2 = i;
//         newString = ogString.slice(spot1, spot2);
//         stringArray.push(newString);
//         ogString = s;
//         spot1 = i+1;
//       } else if (i === s.length-1){
//         spot2 = i+1;
//         newString = ogString.slice(spot1, spot2);
//         stringArray.push(newString);
//       }
//     }
//     let shortWord = stringArray[0];
//       for (let i = 0; i < stringArray.length; i++){
//         if (stringArray[i].length < shortWord.length){
//           shortWord = stringArray[i];
//         } else {
//           shortWord = shortWord;
//         }
//       }
//     return console.log(shortWord.length);
//   }

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

accum("abcd");

function accum(s) {
	let strX = '';
    for (let i = 0; i < s.length; i++){
        if (i === s.length - 1){
            for (let y = 0; y < i + 1; y++){
                if (y === 0){
                    strX = strX + s[i].toUpperCase();
                } else {
                    strX = strX + s[i].toLowerCase();
                }
            }
        } else {
            for (let x = 0; x < i + 2; x++){
                if (x === 0){
                    strX = strX + s[i].toUpperCase();
                } else if (x < i + 1) {
                    strX = strX + s[i].toLowerCase();
                } else {
                    strX = strX + '-'
                }
                
            }

        }
        
    }
    return strX;
}

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str){
//     let strArray = []
//     let ogStr = str;
//     let word = '';
//     let spot1 = 0;
//     let spot2 = 1;
//     let pigArray = [];
//     let firstLetter = '';
//     let sentence = '';
//     for (let i = 0; i < str.length; i++){
//         if (i === '!' || i === '.' || i === '?' || i === ','){
//             spot2 = i+1;
//             spot1 = i;
//             word = ogStr.slice(spot1, spot2);
//             strArray.push(word);
//             ogStr = str;
//         } else if (i === str.length -1){
//             spot2 = i+1;
//             word = ogStr.slice(spot1, spot2);
//             strArray.push(word);
//         } else if (str[i] === ' '){
//             spot2 = i;
//             word = ogStr.slice(spot1, spot2)
//             spot1 = spot2 + 1;
//             strArray.push(word);
//             ogStr = str;
//         }
//     }
//     for (let i = 0; i < strArray.length; i++){
//         if (strArray[i] === '!' || strArray[i] === '.' || strArray[i] === '?' || strArray[i] === ','){
//             word = strArray[i];
//             pigArray.push(word);
//         } else {
//             word = strArray[i];
//             firstLetter = word[0];
//             word = word.slice(1)  + firstLetter + 'ay';
//             pigArray.push(word);
//         }
//     }
//     for (let i = 0; i < pigArray.length; i++){
//         if (pigArray[i] === '!' || pigArray[i] === '.' || pigArray[i] === '?' || pigArray[i] === ','){
//             sentence = sentence + pigArray[i];
//         } else if (i === pigArray.length-1){
//             sentence = sentence + pigArray[i];
//         } else {
//             sentence = sentence + pigArray[i] + " ";
//         } 
//     }
//     return sentence;
//   }

//   pigIt('Pig latin is cool');
//   pigIt('Hello world !');

// pigIt('O temporary o mores !')

// 'Oay emporatay oay oresmay !'


// Oay emporatay oay oresmay !

//   function changePunc(str){
//       let strX = '';
//       console.log(strX + " the strX var b4 the four loop")
//       for (let i = 0; i < str.length; i++){
//           console.log(strX + ' the strX var at iteration: ' + i);
//           console.log(str[i] + ' this is the str Array at index ' + i);
//           if (str[i] === '?' || str[i] === '.'){
//               strX = strX + '!';
//           } else {
//               strX = strX + str[i];
//           }
//           console.log(strX + ' this is what we add to strX at index ' + i);
//       }
//       return console.log(strX);
//   }

//   changePunc("hello. good.bye?");


// beggars([1,2,3,4,5],2)

// function beggars(values, n){
//     let sum = 0;
//     let beggarsArray = []
//     let beggarNum = 0;
//     if (n === 0){
//         return beggarsArray;
//     }
//     for (let x = 0; x < n; x++){
//         beggarsArray.push(0);
//     }
//     for (let i = 0; i < values.length; i++){
//         if (beggarNum === n){
//             beggarNum = 0;
//         }
//         sum = beggarsArray[beggarNum] + values[i]
//         beggarsArray[beggarNum] = sum;
//         beggarNum = beggarNum + 1;
//     }
//     return beggarsArray;
//   }




// function getSum( a,b ){
//     let array = [];
//     let sum = 0; 
//     if (a === b){
//         return a;  
//     } else if (a < b){
//         for (let i = a; i <= b; i++){
//             array.push(i);
//         }
//         for (let i = 0; i < array.length; i++){
//         sum = sum + array[i];
//         }
//     } else if (b < a){
//         for (let i = b; i <= a; i++){
//             array.push(i)
//         }
//         for (let i = 0; i < array.length; i++){
//             sum = sum + array[i];
//         }
//     }
//     return console.log(sum);
// }


// function getSum(a,b) {

//     let sumOf = 0;

//     if (a === b){
//         return console.log(a);
//     } else if (a < b){
//         for (count = a; count <= b; count++) {
//             sumOf = sumOf + count;
//         }

//     } else {
//         for (count = b; count <= a; count++) {
//             sumOf = sumOf + count;
//         }

//     }

//     return console.log(sumOf);

// }

// getSum(12, 10);



// testBoard = [
//     ["E","A","R","A"],
//     ["N","L","E","C"],
//     ["I","A","I","S"],
//     ["B","Y","O","R"]
//   ];

// checkWord(testBoard,'ear')

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


// function checkWord( board, word ) {
//     // ...
//   }

// let newArray = numbers.slice(2, 3)
//  newArray = [3]

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")

// function highAndLow(numbers){
    
//     const args = numbers.split(" ");
    
//     let high = args[0];
//     let low = args[0];

//     for (let i = 1; i < args.length - 1; i++){
//         // high number comparer
//         if (Number(args[i]) > high){
//             high = args[i];
//         }

//         // low number comparer
//         if (Number(args[i]) < low){
//             low = args[i];
//         }
//     }
//     console.log(high + " " + low)
    
//   }
// let num = "8 3 -56 42 -1 0 -9 4 7 4 -4";

// highLow(num);

// function highLow(num){
    // let myArray = num.split(" ");
    // console.log (myArray);

    // let high = myArray[0];
    // let low = myArray[0];

    // for(let i = 1; i < myArray.length - 1; i++){
    //     // high compare
    //     if (Number(myArray[i]) > high){
    //         high = myArray[i];
    //     }
    //     if (Number(myArray[i]) < low){
    //         low = myArray[i];
    //     }
    // }
    // return high + " " + low;
// }

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// pigIt('Pig latin is cool')

// pigIt('Hello world !');

// function pigIt(str){
//     let mySentenceArray = str.split(" ");
//     console.log(mySentenceArray);

//     let firstLetter = '';
//     let endWord = '';
//     let pigLatin = '';
//     let sentence = '';

//     for (let i = 0; i < mySentenceArray.length; i++){
        
//         if (mySentenceArray[i] === '!' || mySentenceArray[i] === '.' || mySentenceArray[i] === '?' || mySentenceArray[i] === '?'){
//             // mySentenceArray[i] = mySentenceArray[i];
//         }  else {
//             firstLetter = mySentenceArray[i].slice(0,1);
//             endWord = mySentenceArray[i].slice(1);
//             pigLatin = endWord + firstLetter + "ay"
//             mySentenceArray[i] = pigLatin; 
//             console.log(mySentenceArray);            
//         }  


        // console.log(mySentenceArray[i]);
        // if (mySentenceArray[i] != '!' && mySentenceArray[i] !== '?'){
        //     firstLetter = mySentenceArray[i].slice(0,1);
        //     endWord = mySentenceArray[i].slice(1);
        //     pigLatin = endWord + firstLetter + "ay"
        //     mySentenceArray[i] = pigLatin; 
        //     console.log(mySentenceArray);    
        // }  
        // else {
        //     console.log('does it go in here?')
        //     mySentenceArray[i] = mySentenceArray[i];       
        // }  
//     }
//     sentence = mySentenceArray.join(" ");
//     console.log(sentence);
//     return sentence;  
// }





// function pigIt(str){
//     let strArray = []
//     let ogStr = str;
//     let word = '';
//     let spot1 = 0;
//     let spot2 = 1;
//     let pigArray = [];
//     let firstLetter = '';
//     let sentence = '';
//     for (let i = 0; i < str.length; i++){
//         if (i === '!' || i === '.' || i === '?' || i === ','){
//             spot2 = i+1;
//             spot1 = i;
//             word = ogStr.slice(spot1, spot2);
//             strArray.push(word);
//             ogStr = str;
//         } else if (i === str.length -1){
//             spot2 = i+1;
//             word = ogStr.slice(spot1, spot2);
//             strArray.push(word);
//         } else if (str[i] === ' '){
//             spot2 = i;
//             word = ogStr.slice(spot1, spot2)
//             spot1 = spot2 + 1;
//             strArray.push(word);
//             ogStr = str;
//         }
//     }
//     for (let i = 0; i < strArray.length; i++){
//         if (strArray[i] === '!' || strArray[i] === '.' || strArray[i] === '?' || strArray[i] === ','){
//             word = strArray[i];
//             pigArray.push(word);
//         } else {
//             word = strArray[i];
//             firstLetter = word[0];
//             word = word.slice(1)  + firstLetter + 'ay';
//             pigArray.push(word);
//         }
//     }
//     for (let i = 0; i < pigArray.length; i++){
//         if (pigArray[i] === '!' || pigArray[i] === '.' || pigArray[i] === '?' || pigArray[i] === ','){
//             sentence = sentence + pigArray[i];
//         } else if (i === pigArray.length-1){
//             sentence = sentence + pigArray[i];
//         } else {
//             sentence = sentence + pigArray[i] + " ";
//         } 
//     }
//     return sentence;
//   }

// let myArray = ['a', 'b', 'c', '!', '?', '.', ','];

// for (let i = 0; i < myArray.length; i++){
//     if (myArray[i] !== '!' && myArray[i] !== '?' && myArray[i] !== '.' && myArray[i] !== ','){
//         console.log(true + " " + myArray[i] + " is not equal to ! and ? and . and ,");
//     } else {
//         console.log(false + " " + myArray[i] + " is equal to ! or ? or . or , or all of them")
//     }
// }