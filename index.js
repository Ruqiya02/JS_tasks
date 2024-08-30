// _____TASK-1______
// Bir 'myArray' adli deyisen yaradin ve her hansi bir arrayi menimsedin .
// Algoritma girilən arrayin içindəki elementlərin hər birindən neçə dənə olduğunu ekrana yazdırmalıdır.

/*let arr=[1,5,7,90,5,1,2,1,7,'salam', 'hello', 'salam'];
console.log(arr)
for(let i=0; i<arr.length; i++){
    let counter=0;
    for(let j=0; j<arr.length; j++){
        if(arr[i]===arr[j]){
            counter++
        }
    }
    console.log(arr[i]+" => " + counter+" eded")
}*/

// _____TASK-2______
// 'firstArr' ve 'secondArr' adli iki deyisken yaradib, her hansi massivi menimsedin.
// Algoritma göndərilən iki arrayi təkrardırıb içindəki elementlərin eyni olub olmadığını
//  yoxlamalı və ona görə boolean dəyər ekrana çap çap.
/*function arraysEqual(firstArr, secondArr){
    firstArr.sort();
    secondArr.sort();
    if (firstArr.length !== secondArr.length) {
        return false;
    }
    for(let i=0; i<firstArr.length; i++){
        if(firstArr[i]!==secondArr[i]){
        return false;
        }
    }
    return true;
}
let firstArr=[2,3,5,"hello"]
let secondArr=[5,3,2,"hello"]
let result=arraysEqual(firstArr, secondArr)
console.log(firstArr, secondArr, result)*/

// _____TASK-3______
// Bir nömrə arrayı yaradın və buna dəyər mənimsədin.
// Arrayin içində olan ən böyük ikinci və ən kiçik ikinci ədədləri ekrana yazdı
/*var arr=[]
for(let i=0;i<10;i++){
    var randomItem=parseInt(Math.random()*100)
    arr.push(randomItem)
}
let sortedArr=arr.sort()
console.log(sortedArr)
console.log(sortedArr[sortedArr.length-2])*/

// _____TASK-4______
// Bir number arrayı yaradın və buna dəyər mənimsədin.
// Arrayin içində olan kiçik ölçülü ədədləri ayrı, ədədləri ayrı toplayıb ekrana yazdırın.
/*let arr1=[1, 2, -5, 8, -3, 9 , -7]
let sumPositive=0; sumNegative=0;
for(let i=0; i<arr1.length; i++){
    if(arr1[i]>0){
        sumPositive+=arr1[i]
    }
    else{
        sumNegative+=arr1[i]
    }
}
console.log(sumPositive, sumNegative)*/
 
// _____TASK-5______
// Bir number arrayı, 'limit' adlı bir number dəyişkən yaradın və bunlara dəyər mənimsədin.
// Arrayin içində olan ədədlərdən limit'dən yüksək olanlarını seçib yeni bir arraya doldurun və yeni arrayi ekrana yazdırın.
/*let numArray=[1, 2, -5, 8, -3, 9 , -7]
let limit=4
let newArr=[]
for(let i=0;i<=numArray.length; i++){
    if(numArray[i]>limit){
        newArr.push(numArray[i])
    }
}
console.log(newArr)*/

// ______________________________


// NEW TASKS
// 1
/*const mySentence = "capitalize the first letter of each word";
const words = mySentence.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);

}
console.log(words.join(' '))*/

// ______________________________

//  2
/*const mainString = "I don’t need a hair stylist, my pillow gives me a new hairstyle every morning.";
const substring = "new";

if (mainString.indexOf(substring) !== -1) {
  console.log("it contains!");
} else {
  console.log("it doesn't contain!");
}*/

// ______________________________

// 3
/*const originalString = "I get enough exercise pushing my luck.";
const reversedString = originalString.split("").reverse().join("");

console.log(reversedString);*/

// OR

/*const String = "I get enough exercise pushing my luck.";
let reversedString = "";

for (let i = String.length - 1; i >= 0; i--) {
  reversedString += originalString[i];
}

console.log(reversedString); */

// ______________________________

// 5
/*function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
  }
  
  const string1 = "A man a plan a canal Panama";
  const string2 = "Salam";
  
  console.log(isPalindrome(string1));
  console.log(isPalindrome(string2));*/

// ______________________________

// 6
/*const number = Math.random()
const fixedNumber = number.toFixed(2); 

console.log(fixedNumber);*/

// ______________________________

// 7
/*const min = 10;
const max = 20;

const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt);*/

// ______________________________

// 8

/*const number = Math.random()*100
console.log(String(number))*/

// ______________________________

// 9

/*const numbers = [3, 7, 2, 9, 5];
let maxValue = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxValue) {
    maxValue = numbers[i];
  }
}

console.log(maxValue);*/

// ______________________________

// 10
/*const number1 = 4.5;
const rounded1 = Math.round(number1);

console.log(rounded1); 

const number2 = 4.4;
const rounded2 = Math.round(number2);

console.log(rounded2); */