

// git remote add origin https://github.com/Ramkrishna1179/DSA.git

// Q.1) Write a program to Using JavaScript switch statement to get the day of the week.

// let ans = new Date();
// let dayname = ans.getDay()
// let day = dayname;
// switch (dayname) {
//                  case 1: console.log("monday");
//                  break;
//                  case 2: console.log("tuesday");
//                  break;
//                  case 3: console.log("wednesday");
//                  break;
//                  case 4: console.log("thursday");
//                  break;
//                  case 5: console.log("friday");
//                  break;
//                  case 6: console.log("saturday");
//                  break;
//                  case 0: console.log("sunday");
//                  break;
//                  default: console.log("please give right input");
//}

// Q2) Write a program to using if-else statement ,Find the grade for input marks:
// - Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “E grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.

// let marks = 5 ;
// myfunc(marks)
// function myfunc(marks){
// if (marks>90 && marks<100) {

//     console.log("S grade")
//     }
//     else if (marks > 80 && marks<90)
//     {
//         console.log("“A grade”")
//     }

//     else if (marks > 70 && marks<80)
//     {
//         console.log("“B grade”")
//     }

//     else if (marks > 60 && marks<70)
//     {
//         console.log("“C grade”")
//     }

//     else if (marks > 50 && marks<60)
//     {
//         console.log("“D grade”")
//     }

//     else if (marks > 40 && marks<50)
//     {
//         console.log("“E grade”")
//     }

//     else
//     {
//         console.log("“Student has failed”")
//     }

// }

// Q3) write a program to Find the largest of three number using if else statement .

// let a=3;
// let b = 7;
// let c = 15;
// if(a>b && a<c){
//     console.log("A is greateer")
// }
// else if (b>a && b>c)
// {
//     console.log("B is greateer")
// }

// else{
//     console.log("C is greateer")
// }

// Q4) write a program to Find the a number is present in given range  using if else statement .
// let s =5;
// let e = 10;
// let r = 2;

// myfunc(s,e,r);
// function myfunc(s,e,r) {
//     if(r>s && r<e){
// console.log("number is between start and end ")
//     }
//     else{
//         console.log("number is not  between start and end ")
//     }
// }

// Q 5)Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. The Number is(x=4,y=7,z=2) (edited)

// let x = 4;
// let y = 7;
// let z = 12;

// if(x>y && x>z){

//     if(y>z){
//         console.log(x,y,z);
//     }
//     else{
//         console.log(x,z,y);
// }
// }
// else if(y>z && y>x){

//     if(z>x){
//         console.log(y,z,x);
// }
// else{
//     console.log(y,x,z);
// }
// }

// else if(z>x && z>y){
//     if(x>y){
//         console.log(z,x,y);
//     }
//     else{
// console.log(z,y,x);
//     }
// }

// Q6)Write a program to print Even numbers in given array using for loop .
// array = [13,23,12,45,22,48,66,100] (edited)

// array = [13,23,12,45,22,48,66,100];
// for(let i=0; i<array.length; i++){

//     if(array[i]%2===0){
//         console.log("number is even :" + array[i]);
//     }
// }

// Q.7) write a program to given a variable, num. Your task is to print using switch case:
// - ONE, if num is equal to 1.
// - TWO, if num  is equal to 2.
// - THREE, if num is equal to 3.
// - FOUR, if num is equal to 4 .
// - FIVE, if num is equal to 5 .
// - SIX, if  num is equal to  6.
// - SEVEN, if num is equal to 7.
// - EIGHT, if  num is equal to 8.
// - NINE, if num is equal to 9 .
// - PLEASE TRY AGAIN, if num is none of the above.

// let num = 5;
// switch (num) {
//                 case 1: console.log("one");
//                  break;
//                  case 2: console.log("two");
//                  break;
//                  case 3: console.log("three");
//                  break;
//                  case 4: console.log("four");
//                  break;
//                  case 5: console.log("five");
//                  break;
//                  case 6: console.log("six");
//                  break;
//                  case 7: console.log("seven");
//                  break;
//                  case 8: console.log("eight");
//                  break;
//                  case 9: console.log("nine");
//                  break;
//                  default: console.log("please try again");
// }

// Q.8)Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

// let a = 9;
// let b = 5;
// let output = myfunc(a,b);
// console.log(output);

// function myfunc(a,b){

//     let sum = a+b;
//     if(a===b){
//     return sum*3;
//     }
//     else{
//         return sum;
//     }
// }


// Q.9) Pyramid pattern by taking the input from the user by prompt star
// output = 

// Enter the height of the pyramid:5
// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

// function printPattern(height) {
//     let pattern = '';
    
//     // First part: Inverse pyramid
//     for (let i = height; i >= 1; i--) {
//         let str = '';
//         // Add leading spaces
//         for (let j = 0; j < height - i; j++) {
//             str += ' ';
//         }
//         // Add stars
//         for (let k = 0; k < 2 * i - 1; k++) {
//             str += '*';
//         }
//         pattern += str + '\n';
//     }

//     // Second part: Pyramid
//     for (let i = 2; i <= height; i++) {
//         let str = '';
//         // Add leading spaces
//         for (let j = 0; j < height - i; j++) {
//             str += ' ';
//         }
//         // Add stars
//         for (let k = 0; k < 2 * i - 1; k++) {
//             str += '*';
//         }
//         pattern += str + '\n';
//     }

//     console.log(pattern);
// }

// const userInput = prompt("Enter the height of the pyramid:");
// const height = parseInt(userInput);

// if (!isNaN(height) && height > 0) {
//     printPattern(height);
// } else {
//     console.log("Please enter a valid positive number.");
// }

// Q .14)Write a program to print Right Triangle Pattern in JavaScript.
// output:-
//     *
//    **
//   ***
//  ****
// *****
// for(let i =1;i<=5;i++){
//     let str = "";
//     for(let j = 5;j>=1;j--){
// if(i>=j){
//     str= str+"*";
// }
// else{
//     str = str+" ";
// }
// }
// console.log(str);
// }

// Q.15)Write a program to print Pyramid Pattern in javascript .
// output:-
//     *
//    ***
//   *****
//  *******
// *********

// Q.16)write a program to print Triangle pattern in javascript .
// output:-
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// for(let i = 1;i<=5;i++){
//     let str = "";
//    for(let j = 1;j<=i;j++){
// str+=i+" ";
//    }
//    console.log(str);
// }


// Q.9)Write a program to print a pattern using for loop .
// output:-
//    1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5
//    1 2 3 4 5 6
//    1 2 3 4 5 6 7
//    1 2 3 4 5 6 7 8

// for(let i = 1; i <9;i++){
//     let str = "";
//     for(let j = 1;j<=i;j++){

// str+=j+" ";
//     }
//     console.log(str);
// }


// Q36)Write a JavaScript program to create a series and take input from the user .
// for example:- user type 5
// output:- A,AA,AAA,AAAA,AAAAA

// let m = prompt("enter your number :",'here')
// let arr=[]
// let n = []
// arr.push(m)
// myfunc(arr)
// function myfunc(arr){
// arr.map(function(el){
// for(let i=1; i<=el; i++){
//   let str = "";
//     for(let j=i; j<=i; j++){
//       for(let k=1; k<=j; k++){
//         str += "A";
// }
// }n.push(str)
// }
// });console.log(n)
// document.body.innerHTML= n;
// }

// Q .37)Write a program to print Pyramid Pattern in javascript .
// output:-
//     *
//    ***
//   *****
//  *******
// *********

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n - i; j++) {
//     str+= " ";
//   }
//   for (let k = 1; k < =2 * i - 1; k++) {
//     str+="*";
//   }
//   console.log(str);
// }

// Q 108 print this pattern
 // 1234
//  5678
//  9012
//  3456
//  7890

// int num = 1;
// for (int i = 1; i <= 5; i++) {
//    for (int j = 1; j <= 4; j++) {
//       System.out.print(num);
//       num++;
//       if (num > 9) {
//          num = 0;
//       }
//    }
//    System.out.println();
//    if (i == 2 || i == 3) {
//       System.out.print(" ");
//    }
// }

// Q.10)Write a program to find the power of a given number using for loop .
// let x = 6;
// myfunc(x);
// function myfunc(x) {
//   for(let i = 1; i <= x; i++) {
//         if(i == x)
//         {
//             console.log(i*i)
//         }
//     }
// }

// Q.11)Write a program to delete all occurrence of repeated  element in given array .
//  arr = [23,56,4,78,5,63,45,210,56];

// let obj = {};
// for(let i = 0; i <array.length; i++) {
// let char = array[i];
// if(obj[char]===undefined)
// {
//     obj[char] = 1;
// }
// else{
//     obj[char]++;
// }
// }
// let arr = [];
// for(let i in obj) {
//   if(obj[i]===1)
//   {
//     arr.push(Number(i))
//   }
// }
// console.log((arr))

// Q.12)write a program to Our application will output the four seasons with the following specifications for simplicity using switch case:
// Winter: January, February, and March
// Spring: April, May, and June
// Summer: July, August, and September
// Autumn: October, November, and December

// let month =new Date().getMonth();
// switch(month) {
//     case 1:
//      case 2:
//      case 3: console.log("Winter");
//      break;

//      case 4:
//      case 5:
//      case 6: console.log("spring");
//      break;

//      case 7:
//      case 8:
//      case 9: console.log("summer");
//      break;

//      case 10:
//      case 11:
//      case 12: console.log("Autumn");
//      break;

//      default: console.log("please type right month number");
//      break;
// }

//  q.13)Write a JS code to find the largest number in an array.
//  arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
//  let max = -Infinity
//     for(let i = 0; i < arr.length; i++){
// if(arr[i] > max){
//     max = arr[i]
// }
//     }
// console.log(max);



// Q.17)Write a JS code to find the number of zeros in 2D Matrix .
//  arr = [[0,1,1],[0,1,0],[1,0,0]];
//  let zeros= 0;
//  for(let i = 0; i < arr.length; i++) {
//    for(let j = 0; j < arr[0].length; j++) {
//          if(arr[i][j]===0){
//             zeros++;
//          }
//      }
//  }
//  console.log(zeros);

// Q .18)Write a JavaScript program to compute the sum and multiplication of an array of integers.
//array = [13, 2, 3, 40, 56, 6,8,20]
// sample output:-
// Sum : 148 , multiplication : 167731200

// let sum = 0;
// let multiplication = 1;
// for(let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//     multiplication = multiplication*array[i];
// }
// console.log(multiplication,sum);

// Q .19)Write a JavaScript program which prints the elements of the following array.
// Sample array :
//  array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

//  for(let i = 0; i < array.length; i++) {
//     console.log("row"+ " "+i)
//     for(let j = 0; j < array[i].length; j++) {
// console.log((array[i][j]));
//     }
// }

// q .20)Write a JavaScript program to sort the items of an array without using sort method .
// array = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// output : [-4, 1, 2, 3, 3, 5, 6, 7, 8]

// let temp;
// for(let i=0;i<array.length;i++){
//   for(j = 0;j<array.length-i-1;j++){
//     if(array[j]>array[j+1]){
//         temp = array[j];
//         array[j] = array[j+1];
//         array[j+1] = temp;
//     }
//   }
// }
// console.log(array)

// Q 21)Write a JavaScript function to remove. 'null', '0', '' " , 'false', 'undefined' , 'string' and 'NaN' values from an array.
//array= [NaN, 0, 15, false, -22, '',undefined, 47, null, NaN, " ", undefined ,"hello",54 ]
// sample output :-[15, -22, 47,54]

// let newarray=[];
// for(var i=0; i<array.length; i++){
//     if(array[i]===undefined || array[i]==='' || array[i]===" " || array[i]===0 || array[i]===null  || array[i]===Number.isNaN()){
//         continue;
//     }
//     else{
//         newarray.push(array[i]);
//     }
// }
// function removeNaN(newarray) {
//     return newarray.filter(item => !isNaN(item));
//   }
// let x = removeNaN(newarray)
// console.log(x)

// Q .22)Write a JavaScript function to merge two arrays using spread operator after removes all duplicates elements and also sorting array.
//array1 = [1, 33, 3,56];  array2 = [2, 30, 1,33];
// output:- [1,2,3,30,33,56

// let newarray = [...array1, ...array2];
// let x= (newarray.filter(function(el,index){
//     return newarray.indexOf(el) === index;
// }));

// let temp;
// for(let i=0;i<x.length;i++){
//   for(j = 0;j<x.length-i-1;j++){
//     if(x[j]>x[j+1]){
//         temp = x[j];
//         x[j] = x[j+1];
//         x[j+1] = temp;
//     }
//   }
// }
//console.log(x)

// Q 23)Write a JavaScript function to find an array contains a specific element.
//arr =  [2, 5, 9, 6,8,3];
// for example:-
// 1)console.log(contains(array, 5));
// output:- True
// 2)console.log(contains(array, 4));
// output:- false

// let int =1;
// let count=0;
// function contains(){
// for(let i = 0; i < arr.length;i++){
//     if(arr[i]===int){
//         count++;
// }
// }
// if(count>0){
//     return true;
// }
// else{
//     return false;
// }
// }
// let x = contains(int);
// console.log(x)

// // Q..24)Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

// let a =1000;
// function myfunc(a){
//     let sum = 0;
//     for(let i=0; i<=a;i++){
//         if(i%3 && i%5){
//             sum+=i;
//         }
//     }
//     return sum;
// }
// let x =myfunc(a)
// console.log(x)

// Q..25)write a program to Sum of Positive Numbers Only using while loop, if the user enters a negative numbers, the loop ends and the negative number entered is not added to sum.

// Q27)Write a JavaScript program to calculate the sum of digits in a number using while loop and function .
// for example:- digitSum(4367) ==> output:-20

// function digitSum(num){
//     let sum = 0;
//     while(num > 0){
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }console.log(sum);
//   }
//   let num = 4367;
//   digitSum(num)

// // Q.28)Write a javaScript code to find the no of digits in a number using while loop and function.
// // for example:- digitCount(8367)==> output 4

// function digitCount(num){
//     let count = 1;
//     while (num / 10 >= 1) {
//      Math.floor(num /= 10)
//       ++count;
//     }
//    console.log(count);

//   }
//   let num = 8367;
//  digitCount(num)

// Q .29)Write a javaScript code to find product of two arrays using function .
// array1 = [3,45,23,78,34];     array2 = [4,2,34,4,12,1,2,3];
// output:-  [12, 90, 782, 312, 408, 1]

// getproduct(array1, array2)
// function getproduct(array1, array2) {
//   let arr = [];
//   for(let i = 0; i <array2.length-3; i++) {
//     arr.push(array1[i]*array2[i]);
//   }
//   arr.push(array2[array2.length-3],array2[array2.length-2],array2[array2.length-1])
//   console.log(arr);
// }

// Q 30)Write a program to using Ternary Operator,Find the num for input num:
// - Print “The result is not satisfactory...” if num is less then or equalto 40.
// - Print “The result is in an average...” if num is less then or equalto 60.
// - Print “The result is Good...” if num is less then or equalto 80.
// - else print"The result is Excellent...".

// let num =  prompt('Enter num here :');
// useTernory(num)
// function useTernory(num){
// var result = (num <= 40) ? '“The result is not satisfactory...”' :
//              (num <= 60) ? '“The result is average...”' :
//              (num <= 80) ? '“The result is good...”' :
//              "The result is Excellent..."
// document.body.innerText= (`${result}in the exam.`);
// }

// Q32) program to check if number is positive, negative or zero using nested ternary operator.

// let num = prompt("Enter your num :","Here");
// find_pos_neg_or_zero(num)
// function find_pos_neg_or_zero(num){
//     let result = (num>=0) ? (num==0) ?"zero": "positive" :"negetive"
//     document.body.innerText= (`Your output is :${result}`);
// }

// Q33)write a program to check if number is positive, negative or zero using nested ternary operator using function.

// let num = -1;
// find_pos_neg_or_zero(num)
// function find_pos_neg_or_zero(num){
//     let result = (num>=0) ? (num==0) ?"zero": "positive" :"negetive"
//     console.log(result);
//     document.body.innerText= (`Your output is :${result}`);
// }

// let num = 1// let word =//num === 1//? 'one'//: num === 2// ? 'two'// : num === 3//? 'three'//:'unknown';//console.log(word);

// Q34)Write a JavaScript program which prints the elements of the following array.
// array= [[1, 2, 1, 24],38, [8, 11, 9, 4], 23, 67, [7, 0, 7, 27],[7, 4, 28, 14], 12, 34]

// for(let i = 0; i <array.length; i++) {
//     console.log(`row ${i}`);
//     if(array[i].length===undefined) {
//       console.log(array[i]);
//     }
//     else{
//       for(let j = 0; j < array[i].length; j++) {
//         console.log(array[i][j]);
//             }
//     }
// }

// Q35)Write a JavaScript program to check password using nested ternary operator .The password must contain at least :
//  12 characters
// include Digits (1-9) also excluding (0)
// include Special characters also excluding(@,#)

// var pass = "harshita$134"
//         if (pass.length == 12) {
//             if (pass.match(/\d/g) === null) {
//                 console.log("please enter any number")
//             }
//             else if (pass.match(/\W/g) === null) {
//                 console.log("please enter any spacial char")
//             }
//             else if (pass.includes("@")) {
//                 console.log("@ not allowed")
//             }
//             else if (pass.includes("#")) {
//                 console.log("# not allowed")
//             }
//             else if (pass.includes("0")) {
//                 console.log("0 not allowed")
//             }
//             else {
//                 console.log("everything done")
//             }
//         }
//         else {
//             console.log("wrong")
//         }

// let password = prompt("Enter password here :","Passwords are required");
// checkpassword(password)
// function checkpassword(password){
//   let x=password.include("@")
//      let result = (password.length == 12)?
//      (x==true)? 'dont enter @ ' : (password.include("#")==true)? 'dont entr #':(password.include("0")==true)?'dont enter 0':'sign in successfull':'please enter a valid password'
//      document.body.innerText= (`Your output is :${result}`);
// }




//q.38) Write a JavaScript program that accept two integers and display the larger.

// find_larger = function(a,b){
//   if(a>b){
//     return a;
//   }
//   else{
//     return b;
//   }
// }
// console.log(find_larger(0,1));

// Q.39)Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

// let a =3;
// let b = -7;
// let c = 2;

// find_sign = function(a,b,c){
//  let x = Math.sign(a);
//  let y = Math.sign(b);
//  let z = Math.sign(c);
//  let output= "";
//  if(x>0){
//   output+=(`The sign is : "+" `)
//  }
//  else{
//   output+=(`The sign is : "-" `)
//  }

//  if(y>0){
//   output+=(`The sign is : "+" `)
//  }
//  else{
//   output+=(`The sign is : "-" `)
//  }

//  if(z>0){
//   output+=(`The sign is : "+" `)
//  }
//  else{
//   output+=(`The sign is: "-" `)
//  }

//  alert(output);
// }
// find_sign();

// Q.40)Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
// Sample numbers : -5, -2, -6, 0, -1

// let arr = [-5, -2, -6, 0, -1];
//   const max = arr.reduce((acc, val) => {
//       return acc > val ? acc : val;
//   });
//   alert(max);

// Q.41)Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for(let i=0; i<=15; i++){
//   if(i%2==0){
//     console.log(`"${i} is even"`);
//   }
//   else{
//     console.log(`"${i} is odd"`);
//   }
// }

// Q.42)Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// todays_date_and_time()
// function todays_date_and_time(){
//     let today = new Date();
//     let dd = today.getDay();
//     let mm = today.getMinutes() + 1;
//     let hh = today.getHours();
//     let ss = today.getSeconds();
//  if(hh>12){
//      hh = hh - 12 +" "+ "PM";
//  }
//  else{
//      hh = hh + " "+ "AM";
//  }
// let x = ()=>{
//   let day = dd;
//     switch(dd){
//         case 0:
//             day = "Sunday";
//             return (`Today is : ${day}`)
//             break;

//             case 1:
//             day = "Monday";
//             return (`Today is : ${day}`)
//             break;

//             case 2:
//             day = "Tuesday";
//             return (`Today is : ${day}`)
//             break;

//             case 3:
//             day = "Wednesday";
//             return (`Today is : ${day}`)
//             break;

//             case 4:
//             day = "Thursday";
//             return (`Today is : ${day}`)
//             break;

//             case 5:
//             day = "Friday";
//             return (`Today is : ${day}`)
//             break;

//             case 6:
//             day = "Saturday";
//             return (`Today is : ${day}`)
//             break;
//     }
// }
// console.log(x())
// console.log(`Current time is :${hh} : ${mm} : ${ss}`)
// }

// // Q43)Write a JavaScript program to print the contents of the current window.

// Print_current_window()
// function Print_current_window() {
//       window.print();
// }

// Q44)Write a JavaScript program to get the current date.
// Expected Output :mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// get_current_date()
// function get_current_date(){
//   let today = new Date();
//   let dd = today.getDay();
//   let mm = today.getMonth() + 1;
//   let dd_mm = today.getDate();
//   let yyyy = today.getFullYear();
//   console.log(`${mm}-${dd}-${yyyy} , ${mm}/${dd}/${yyyy}`);
// }

// // Q.45)Write a JavaScript program to determine whether a given year is a leap year or not.

// let year = prompt("Enter year","here");
// check_leap_year = function(){
//   (year%4 ===0 && year%100 !==0 || year%400 ===0) ?alert("This year is a leap year"):alert("This year is not a leap year")
// }
// check_leap_year();

// // Q.46)Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

// being_sunday = function() {
//       for(let year = 2014; year <= 2050; year++){
//         let today = new Date(year, 0, 1);
//           if(today.getDay() === 0){
//               console.log(`${year} is a Sunday`);
//           }
//           else{
//               console.log(`${year} is not a Sunday`);
//           }
//       }
// }
// being_sunday();

//Q.47)Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted

// random_integer = function(){
//   let user_input = prompt("Please enter a number between 1 and 10")
//   let random_integer = Math.ceil(Math.random() * 10);
//   (user_input ===random_integer) ? alert('"Good Work"'): alert('Not matched');
// }
// random_integer()

// Q.48)Write a program to Using JavaScript switch statement to get the given day of the week.

//  getDay = function(){
//     let day = prompt("Enter the day number of the week :");
//     switch(Number(day)){
//       case 0 :alert("Sunday");break;
//       case 1 :alert("Monday");break;
//       case 2 :alert("Tuesday");break;
//       case 3 :alert("Wednesday");break;
//       case 4 :alert("Thursday");break;
//       case 5 :alert("Friday");break;
//       case 6 :alert("Saturday");break;
//       default:alert("Please enter a number between 0 to 6");
//     }
// }
// getDay();

// Q.49)Write a JavaScript program to calculate days left until next Christmas.

// function calculate_days_until_next_christmas(){
//     let current_date = new Date();
//     let current_year = current_date.getFullYear();
//     let current_month = current_date.getMonth();
//     let current_day = current_date.getDate();
//     let current_day_of_week = current_date.getDay();
//     if(current_date.getMonth()==11 && current_date.getDate()>=25){
//       current_year = current_year+1;
//     }
//     chrismas_date = new Date(current_year,11,25);
//     miliseconds = 1000*60*60*24;
//     day_left = Math.ceil((chrismas_date.getTime()-current_date.getTime())/miliseconds)
//     console.log(day_left);
// }
// calculate_days_until_next_christmas()

// Q.50)Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

// calculate = function(){
//   let user_input_1 = +prompt('Please enter first numbers');
//   let user_input_2 = +prompt('Please enter second numbers');
//   multiplication = ((user_input_1) * (user_input_2))
//   division = ((user_input_1) / (user_input_2))
//   alert(`The multiplication of ${user_input_1} and ${user_input_2} is :${multiplication} and division is :${division}`)
// }
// calculate();

// Q.51)Write a JavaScript program to get the website URL (loading page).

//  function GetURL() {
//   var url = document.URL;
//   document.getElementById("url").innerHTML = url;
//  }

// Q.52)Write a JavaScript exercise to create a variable using a user-defined name.

// let x = "ram yadav";
// let y = 100;
// this[y] = x;
// console.log(this[y]);

// Q.53)Write a JavaScript exercise to get the extension of a filename.
//     for example:-filename = "system.php"
//              output:-"php"
// let file = "index.js";
// file = file.split(".").pop();
// console.log(file);

// Q.54) Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

// let num = prompt("Please enter a number")
// get_difference(num)
// function get_difference(num){
//     if(num > 13){
//         alert(2*Math.abs(num - 13));
//     }
//     alert(13-num);
// }

// Q.55)Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

// compute = function(){
//     let num1 = prompt("Please enter first number");
//     let num2 = prompt("Please enter second number");
//     if(num1 == num2){
//         alert(num1*3)
//     }
//     else{
//         alert(num1 + num2);
// }
// }
// compute();

// Q.56)Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

// abs_difference = function(){
//     let num1 = prompt("Please enter first number");
//     (num1 > 19) ? alert(Math.abs(num1-19)*3) : alert(Math.abs(num1-19));
//     };abs_difference()

// Q.57) Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

// check = function(){
//     let num1 = +prompt("Please enter first number");
//     let num2 = +prompt("Please enter second number");
//     if(num1+num2 == 50){
//         return true;
//     }
//    else{
//     if(num1==50 || num2==50){
//       return true;
//     }
//     else{
//       return false;
//     }
//    }
//   };alert(check());

// Q.58)Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

// check()
//    function check(){
//      let num1 = +prompt("Please enter first number");
//        (Math.abs(num1-100) <= 20 || Math.abs(num1-400) <=20) ? alert(true): alert(false);
//    }

// Q.59)Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

// let check_py = ()=>{
//   let str = prompt('please enter a string');
// let x = str.substring(0,2);
// if(x == "Py"){
//  alert(str)
// }
// else{
//  let y = str.split("");
//  y.unshift("Py");
//  let newstr = y.join("");
//  alert(newstr)
// }
// };check_py()

// Q.60)Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

// function check(){
//     let num1 = +prompt("Please enter first number");
//     let num2 = +prompt("Please enter second number");
//     (num1 > 0 && num2 < 0 || num1<0 && num2 > 0 || num1&&num2>0)? alert(true): alert(false);
// };check()

// Q.61)Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
// for example:-remove_character("Python",3)
// output:-"Pyton"

//  remove_character = function(){
//   let str = "Python";
//   str = str.replace("t","")
//   console.log(str)
//  };remove_character()

// Q.62)Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
// for example:-first_last('abc')
// output:-cba

// function create(){
//      let str = "abcd";
//      let new_str;
//      if(str.length<=1){
//      return str;
//      }
//      let mid_str = str.substring(1, str.length-1);
//     return str.charAt(str.length-1)+(mid_str)+str.charAt(0);
// };
// let output = create()
// console.log(output);

// Q.63)Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
// for example:-front_back('abc')
// output:-aabca

// function create(){
//       let str = "R";
//       let first_character = str.substring(0,1)
//       result = first_character+str+first_character;
//       console.log(result)
//     };create()

// Q.64)Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7(return output in true and false.)

// function check(){
//     let num1 = +prompt("Please enter first number");
//     if(num1 >=1){
//       (num1%3==0 || num1%7==0) ? alert(true) : alert(false);
//     }
//     else
//     {alert("pleasee enter number greater than zero")}
// };check()

// Q.65)Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
// for example:-front_back3("abc")
// output:-abcabcabc

// function create(){
//       let str = "abc";
//       if(str.length>=3){
//         let last_three_char = str.substring(str.length,str.length-3)
//         console.log(last_three_char+str+last_three_char);
//       }

//     };create();

// Q.66)Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

// function check(){
//     let str = "Java";
//     (str.startsWith("Java"))? console.log(true):console.log(false)
// };check()

// Q.67)Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

//  function check(){
//      let num1 = +prompt("Please enter first number");
//      let num2 = +prompt("Please enter second number");
//     (num1>=50 && num1<=99 || num2>=50 && num2<=99)?alert(true):alert(false);
//     };check();

// Q.68) Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.

//  function check(){
//      let num1 = +prompt("Please enter first number");
//      let num2 = +prompt("Please enter second number");
//      let num3 = +prompt("Please enter third number");
//     (num1>=50 && num1<=99 || num2>=50 && num2<=99 || num3>=50 && num3<=99)?alert(true):alert(false);
//     };check();

// Q.69)Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
// for example:-
// 1)check_script("JavaScript")
// output-Java
// 2)check_script("CoffeeScript")
// output:-CoffeeScript

//  function check_script(){
//      let str = "CoffeeScript";
//     str1 = str.search("Script");
//     if(str1 ===4){
//       console.log(str.slice(4,str.length))
//     }else{
//       console.log(str)
//     }

//  };check_script()

// Q.70)Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// function check(){
//     let num1 = +prompt("Please enter first number");
//     let num2 = +prompt("Please enter second number");
//     if(num1===num2){
//       alert(`Number should not be equal`)
//     }
//     else if(num1>num2 && num1<100){
//         alert(`Num1 ${num1} is nearest to 100`)
//     }
//     else{
//         alert(`Num2 ${num2} is nearest to 100`)
//     }
// };check()

// Q.71) Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// function check(){
//     let num1 = +prompt("Please enter first number");
//     let num2 = +prompt("Please enter second number");

//     ((num1>=40 && num1<=60 || num1>=70 && num1<=100)  && (num2>=40 && num2<=60 || num2>=70 && num2<=100))?alert(true):alert(false);
// };check();

// Q.72)Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive

// function check(){
//     let num1 = +prompt("Please enter first number");
//     let num2 = +prompt("Please enter second number");
//     if(num1>=40 && num1<=60 && num2>=40 && num2<=60 && num1!==num2){
//        if(num1>num2){
//         alert(`num1 ${num1} is larger than ${num2}`);
//        }
//        else{
//         alert(`num2 ${num2} is larger than ${num1}`);
//        }
//     }else{
//       alert(`please enter the numbers between 40 to 60`)
//     }
// };check()

// Q.73)Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

// function check(str,R){
//      if(str.substring(1,4)===R){
//     console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// };check("ramyadav","amy")

// Q.74)Write a JavaScript program to check whether the last digit of the three given positive integers is same.

// function check(){
//    let num1 = prompt("Please enter first digit");
//    let num2 = prompt("Please enter second digit");
//    let num3 = prompt("Please enter third digit");
//    if(num1>0 && num2>0 && num3>0){
//        if(num1%10 === num2%10 && num2 %10 === num3%10 && num3%10 === num1%10){
//            alert(true)
//        }
//        else{
//            alert(false)
//        }
//    }
// };check();

// Q.75)Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

//  function check(s){
//   (s.length < 3)?console.log(s.toUpperCase()):console.log(s.substring(0,3).toLowerCase(0,3)+s.substring(3))
//  };check("RAMYADAV")

// Q.76)Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

//  function check(){
//   let num1= 23;
//   let num2= 5;
//   let sum= num1+num2;
//     if(sum >=50 && sum <=80){
//        console.log(65)
//     }
//     else{
//        console.log(80)
//     }
//  };check()

// Q.78)Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

//  function check(){
//     let num1 = +prompt("Please enter first number");
//     let num2 = +prompt("Please enter second number");
//     (num1==8 || num2==8 || num1+num2==8 || num1-num2==8) ?alert(true):alert(false)
//  };check()

// Q.79)Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

// function check(){
//  let x = +prompt("Please enter first number");
//   let y = +prompt("Please enter second number");
//   let z = +prompt("Please enter third number");
//   if(x===y && y===z){
//       alert(30);
//   }
//   else{
//       alert(20);
//   }
//   if(x==y || y==z || z==x){
//      alert(40);
//   }
// };check();

// Q.80) Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.

//  function check(){
//     let x = +prompt("Please enter first number");
//     let y = +prompt("Please enter second number");
//     let z = +prompt("Please enter third number");
//     (y>x && z>y) ? alert("strict mode"):alert("soft mode")
//  };check();

// Q.81)Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digits.

// function check(){
//     let x = +prompt("Please enter first number");
//     let y = +prompt("Please enter second number");
//     let z = +prompt("Please enter third number");
//     (x%10 ==y%10 || y%10 == z%10 || x%10==z%10) ? alert(true):alert(false);
// };check();

// Q.82)Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.

//  function check(){
//      let num1 = +prompt("Please enter first number");
//      let num2 = +prompt("Please enter second number");
//      (num1+num2==15 || num1-num2==15 || num1==15 || num2==15) ? alert(true):alert(false);
//  }; check();

//     Q.83) Write a. JavaScript program to find the types of a given angle.
// Types of angles:
// -Acute angle: An angle between 0 and 90 degrees.
// -Right angle: An 90 degree angle.
// -Obtuse angle: An angle between 90 and 180 degrees.
// -Straight angle: A 180 degree angle.

//   function check_angle(){
//       let angle = +prompt("Please enter first number");
//        if(angle >=0 && angle <90){
//         alert("Acute angle")
//        }
//        else if(angle==90){
//         alert("Right angle")
// }
//        else if(angle>90 && angle<180){
//         alert("Obtuse angle")
//   }
//         else if(angle ===180){
//         alert("Straight angle")
// }
//   };check_angle()

// Q.84)This is a short pre-screening quiz, and there are two challenges.
// #1: Write a function in whatever language you want that takes a list of strings,
//     and creates a new string made up of all the original strings' characters
//     in alternating order. If any of the strings are shorter than others, then spaces should be used where
//     the characters are missing
// Examples:
//     alternate(["abc", "123", "xyz"]) => "a1xb2yc3z"
//     alternate(["abc", "1"]) => "a1b c "
//     alternate(["abcd", "12", "x"]) => "a1xb2 c  d  "
//     alternate(["ab", "1234"]) => "a1b2 3 4"
// @here please solve this

// let arr = ["abc", "1"]
// function alternate(arr){
// let max = arr[0].length;
// for(let i = 0;i<arr.length;i++){
//   if(arr[i].length > max){
// max = arr[i].length;
//   }
// }
// let str = "";
//    for(let i = 0;i<max;i++){
//        for(let j = 0;j<arr.length;j++){
//           if(arr[j][i]===undefined){
//             str+=" ";
//           }
//           else{
//             str+=arr[j][i];
//           }
//        }
//    }
//    return str;
//   }
// let x = alternate(arr)
// console.log(x)

//Q.85)Write a JavaScript to replace each character of a given string by the next one in the English alphabet.

// function alphabet_char_Shift(str) {
// let new_str = "";
//   let str1 = "abcdefghijklmnopqrstuvwxyz";
//   for(let i = 0; i < str.length; i++){
//     for(let j = 0; j < str1.length; j++){
//       if(str1[j] == "z"){
//         new_str +="a"
//       }
//       else if(str[i] === str1[j]){
//         new_str+=str1[j+1];
//         break;
//       }
//     }
//   }
// return new_str;
// }
// console.log(alphabet_char_Shift("abcdxyz"))

// Q.87)Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case
// Fox example "Write" will be write and "PHp" will be "PHP"

// function convert(str){
//    let x = 0;
//    let y = 0;
//    for(let i = 0; i < str.length; i++){
//     (/[A-Z]/.test(str[i])) ? x += 1:y+=1;
//   }
//     if(x>y){
//      return str.toUpperCase()
//     }else{
//       return str.toLowerCase()
//     }
// };console.log(convert("PHp"));

// Q.88)Write a JavaScript function to check whether an `input` is an array or not.
// for example:-
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));

// function is_array(x){
//    return Array.isArray(x);
// };
// let y = is_array([1, 2, 4, 0])
// let z = is_array('w3resource')
// console.log(y,z)

// Q.89)Write a JavaScript function to clone an array. Go to the editor
// for example:-
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// function array_Clone(a){
// let b = [...a];
// console.log(b)
// };array_Clone([1, 2, 4, 0])
// array_Clone([1, 2, [4, 0]])

// Q.90)Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// for example:-
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// Expected Output :
// 7
// []

//  function getFirst(array,n) {
//   if (n == null)
//       return array[0];
//     if (n < 0)
//       return [];
//     return array.slice(0, n);
//  }
// console.log(getFirst([7, 9, 0, -2],2));
// console.log(getFirst([],3));

// Q93)Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// for example:-
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// Expected Output :
// -2
// [9, 0, -2]

//  function getLast(array,n) {
//   if (n == null)
//       return array[array.length - 1];
//     if (n < 0)
//       return [];
//       return array.slice(array.length - n, array.length);
//  }
//  console.log(getLast([7, 9, 0, -2]));
//  console.log(getLast([7, 9, 0, -2],3));

// Q94)We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.

// Q95)There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// Sample array :
// array1 = [1,0,2,3,4];
//  array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// function compute(array1,array2) {
//     let arr = [];
//     for (let i = 0; i < array2.length; i++) {
//       if(array1[i] !==Number.isInteger()){
//         arr.push(array2[i]);
//       }
//       else if(array2[i] !==Number.isInteger()) {
//           arr.push(array1[i]);
//       }
//       else{
//         arr.push(array2[i]+array1[i]);
//       }
// }
// return arr;
// }
// console.log(compute(array1, array2))

// Q99)Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

// function devide(int,n){
//      if(n ==1){
//       return int;
//      }
//      else{
//       while(int%n ===0){
//         int = int/n;
//       }
//      }
//      return int;
// }
// console.log(devide(-12,2));
// console.log(devide(20,2));

// Q100)Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

// function Check_prime(x){
//   let c  = 0;
//     for(let i = 1;i<=x;i++){
//       if(x%i==0){
//        c++;
//       }
//     }
//     if(c==2){
//         return true;
//     }
//     else{
//       false
//     }
// }
// let arr = [13, 5, 8, 17, 12, 13];
// let new_arr = [];
// for(let i=0; i<arr.length; i++){
//    let x = arr[i];
//    if(Check_prime(x) === true){
//       new_arr.push(x);
//    }
// }
// console.log(new_arr.sort(function(a,b){
//   return a-b;
// }));

// Q101)Write a JavaScript program to find the longest string from a given array.

//  function longest_string(arr){
//       let max = arr[0].length;
//       let ans = arr[0];
//       for(let i = 1; i <arr.length; i++){
//           if(arr[i].length > max){
//               max = arr[i].length;
//               ans = arr[i];
//           }
//         }
//         console.log(ans);

//  };(longest_string(["ab","aaa","vvvr","ssssssss"]));

// Q126)Write a JavaScript program to remove specified elements from the left of a given array of elements.

// function removeLeft(array, specified_el=1) {
//   let x =  array.slice(specified_el);
//   return (x);
//       }
//       let array=[1, 5, 8, 10, 12, 13];
//       console.log(removeLeft(array,2))

// Q105)Write a JavaScript program to find the number of elements which presents in both of the given arrays.

// function give_Duplicates(arr1,arr2){
//     let count = 0;
//     for(let i=0;i<arr1.length;i++){
//        for(let j=0;j<arr2.length;j++){
//            if(arr1[i]===arr2[j]){
//                count++;
//            }
//        }
//     }
//     console.log(count);
// }
// let arr1 = [1, 5, 8, 10, 12, 13];
// let arr2 =[2,5,8,1,12,14,13];
// give_Duplicates(arr1,arr2)

// Q106)// paisa basul
// function check(cr){
//   let wallet = 0;
//   let count = 0;
//   let n = 0;
//  let f=0;
//  let t= 0;
//  let tw = 0;
//   for(let i = 0;i<cr.length;i++) {
//      if(cr[i]===5){
//         count++;
//         f++;
//      }
//      else if(cr[i]===10&&f>0){
//          count++;
//          f--;
//          t++;
//      }
//      else if(cr[i]===20 &&(t>0 && f>0)){
//          count++;
//          t--;
//          f--;
//          tw++;
//      }
//      else{
//          n++;
//      }
//  }
//  if(n>0){
//      return false;
//  }
//  else{
//      return true;
//  }
//   }
//   let cr = [20,10,20];
//   let x = check(cr)
//    console.log(x);




// Q 107// function Reverse(str) {
//   const n = str.length;
//   let reversed = "";

//   for (let i = n - 1; i >= 0; i--) {
//     const char = str[i];
//     if (/^[a-zA-Z]$/.test(char)) {
//       reversed += char;
//     }
//   }
//   console.log(reversed);
//   let output = "";
//   for (let i = 0, j = 0; i < n; i++) {
//     if (/^[a-zA-Z]$/.test(str[i])) {
//       output += reversed[j];
//       j++;
//     } else {
//       output += str[i];
//       console.log(output)
//     }
//   }
//   return output;
// }
// console.log(Reverse("abc@#def&()gh"));











// function Reverse(str) {
//   let alphabetArr = [];
//   let output = "";

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (/^[a-zA-Z]$/.test(char)) {
//       alphabetArr.push(char);
//     }
//   }

//   for (let i = 0, j = alphabetArr.length - 1; i < str.length; i++) {
//     const char = str[i];
//     if (/^[a-zA-Z]$/.test(char)) {
//       output += alphabetArr[j];
//       j--;
//     } else {
//       output += char;
//     }
//   }

//   return output;
// }

// console.log(Reverse("abc@#def&()gh"));




// Q.109) Fibbonacci series

// function fibonacci(num) {
//     if (num < 0) {
//       throw new Error("Fibonacci sequence is defined for non-negative numbers");
//     } else if (num === 0 || num === 1) {
//       return num; 
//     } else {
//       let a = 0, b = 1, c;
//       for (let i = 2; i <= num; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//       }
//       return c;
//     }
//   }
  
//   let fibonacciSeries = [];
//   for (let i = 0; i < 5; i++) {
//     fibonacciSeries.push(fibonacci(i));
//   }
  
//   console.log(fibonacciSeries);
  
  
