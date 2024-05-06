

// let str=prompt("enter a string")
// let rev=" "
// for(var i=str.length-1;i>=0;i--)
// {
//     rev += str[i];
// }
// console.log(rev)


//---------------------------------------------------------

// let n=positiveUniq([-1,2,-3,-4,-5,3,3,3,3,7,8,9,9])

// function positiveUniq(x)
// {
//     var arr=[]
//     var j=0;
//     for(var i=0;i<x.length;i++)
//     {
//         if(x[i]>0 && arr.indexOf(x[i])==-1)
//         {
//             arr[j]=x[i]
//             j++

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

// let n=10;
// let pattern="";
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n-i; j++){
//         pattern+=" ";
//     }

//     for(let k = 1; k <= i*2-1; k++){
//         pattern+="*";
//     }
//     pattern += "\n";
// }
// console.log(pattern);

//--------------------------

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = '';
//     for (let j = 1; j <= 2 * n; j++) {
//         if ((i <= n-i)) {
//             str +=  '* ';
//         } else {
//             str += '  ';
//         }
//     }
 
//     console.log(str);
// }

//------------------------------------------------

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = '';
//     for (let j = 1; j <= 2 * n-1; j++) {
//         if (i + j >= n + 1 && (i >= j - n + 1)) {
//             str += '* ';
//         } else {
//             str += '  ';
//         }
//     }
 
//     console.log(str);
// }

//------------------------------------------

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = '';
//     for (let j = 1; j <= 2 * n - 1; j++) {
//         if (j >= n - i + 1 && j <= n + i - 1) {
//             str += '* ';
//         } else {
//             str += '  ';
//         }
//     }

//     console.log(str);
// }

