//Write a function in JavaScript that takes an array of integers and returns the sum of all even numbers in the array.
//Ans:-  
function sumOfEvenNumbers(arr) {
              let sum = 0;
              for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                  sum += arr[i];
               }
            }
         return sum;
       }
