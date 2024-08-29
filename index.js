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

