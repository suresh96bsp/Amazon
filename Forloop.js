// for(let i=1; i<=10; i=i+2)
// {
//     console.log(i);
// }
    
// for(let i=50; i>=30; i--){
//     console.log(i);
// }



// let sentence = "I like apple and mango. Apple is tasty. Mango is sweet. I like apple and mango.";

// let words = sentence.toLowerCase().match(/\b\w+\b/g);

// let count = {};

// for (let word of words) {
//     // count[word] = (count[word] || 0) + 1;
//     if(count[word]){
//         count[word]++
//     }
//     else{
//         count[word]=1;
        

//     }
// }

// for (let word in count) {
//     if (count[word] > 1) {
//         console.log(word + " = " + count[word]);
//     }}
    


// let str = "Hello World and Javascript ";
// let word = "";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//         word = str[i] + word;
//     } else {
//         result = result + word + " ";
//         word = "";
//     }
// }
// result = result + word;
// console.log(result);





// let arr = [10, 20, 30, 20, 40, 10, 50, 30];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             console.log("Duplicate value: " + arr[i]);
//             break;
//         }
//     }
// }



// Reverse the words
// let str = "Hello World and Javascript ";
// let word = "";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//         word = str[i] + word;
//     } else {
//         result = result + word + " ";
//         word = "";
//     }
// }
// result = result + word;
// console.log(result);




// for (let num = 2; num <= 100; num++) {
//     let count = 0;

//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             count++;
//         }
//     }

//     if (count == 2) {
//         console.log(num);
//     }
// }


// let count=0;
// for (let n=2; n<=100; n++){

//     for(let i=2; i<n; i++){
//         if(n % i == 0){
//             count++;
//         }
//     }
//     if(count==0){
//         console.log(n + "is a prime number")
//     }else{
//         console.log(n + "is not a prime number")
//     }
// }


for (let n = 2; n <= 100; n++) {
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            count++;
        }
    }

    if (count == 0) {
        console.log(n + " is a prime number");
    } else {
        console.log(n + " is not a prime number");
    }
}







