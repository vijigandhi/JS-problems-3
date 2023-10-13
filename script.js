"use strict"

// let str=prompt("enter a string")
// let rev=" "
// for(var i=str.length-1;i>=0;i--)
// {
//     rev += str[i];
// }
// console.log(rev)

// let n=positiveUniq([-1,-2,-3,1,-4,-5,5])

// function positiveUniq(x)
// {
//     var arr=[]
//     for(var i=0;i<x.length;i++)
//     {
//         if(x[i]>0)
//         {
//             arr[i]=x[i]
//         }
//     }
//     console.log(arr)
// }

//-------------------------------------------------------------

// function WordCount(str) {
//     var total = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             total += 1;
//         }
//     }
//     return total + 1;
// }
// console.log(WordCount("hi hello welcome"));

//-------------------------------------------------------------------

let a="hello"
let b=[]
for(var i=1;i<=a.length;i++)
{
    if(i%2==0)
    {
        b=a.toLowerCase();
    } 
    else{
        b=a.toUpperCase();
    }   
}
console.log(a)

// function digits_count(n) {
//     var count = 0;
//     if (n >= 1) ++count;
  
//     while (n / 10 >= 1) {
//       n /= 10;
//       ++count;
//     }
  
//     return count;
//   }

  


// function counting(number) { 
//     let count = 0; 
//     for (let n = number; n > 0; n = Math.floor(n / 10)) { 
//         count++; 
//     } 
//     return count; 
// } 
  
// let num = 12345; 
// let result = counting(num); 
// console.log(`Number of digits in ${num}: ${result}`);

let n=prompt("enter a number");
let count=0;
for(i=n.length;i>0;i--)
{
    if(i=Math.floor(i/10))
    {
        count++
    }
    console.log(count)
}