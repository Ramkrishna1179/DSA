// 1) Alt+down = make formate of code

// 2)rcc = creates a structure of clsss components

// 3.) let tr = document.querySelectorAll("tbody tr"); This will select all the tr which are inside the tbody

// 4.) let arr = [1,2,3,4,5,6];
// arrr = [1,2,3,4,5,6]
// let =[];
// newarr = [...arr,...arrr]
// console.log(newarr)
//  [a,,,,f] = arr;
// console.log(a,f)

// 5.) rest operator It takes an arguments and push it into an array and returns the new array loke c here is a one array which is holding the values from 3 to 6
// function sum(a,b,...c){
// console.log(a+b,c)
// }
// sum(1,2,3,4,5,6)

// 6.) The spread operator is opposite of the rest it spreads all the value of the array and returns that values as indexes bise.
// function dosum(a,b,c,d,e,f){
// console.log(a+b+c+d+e+f)
// }
// let arr = [1,2,3,4,5,6]
// dosum(...arr)

// 7.) with the use of new Date function if wee uses tolocaleDateString so it will give us todays full date with year and month or tolocaleTimeString will give us today's full time with hour minute seconds and am pm as well. and if we use tolocaleString so it will give us full date amd time.
// const newdate = new Date().toLocaleTimeString()/ toLocaleDateString()
// console.log(newdate)
// const newdate1 = new Date().toLocaleString()
// console.log(newdate1)


// .8) Array.From() method returns an array from any object with a length property.
// let children = Array.from(e.target.parentNode.parentNode.children);

// .9.) Date(2020 year,2Month,5Din,14Hours)

// 1. 3rd smallest number from an array.. 2.remove duplicates..3. find duplicate characters in two string..example- ramkrashna,ramjane= rama.
// 4.Write a program to create the email by using the first four and last three charactrer of the string. 


// .10.).. This is about the How to create select dropdown dynamically by javascrit.
// let td3 = document.createElement("td");
// let select = document.createElement("select");
// let option3 = document.createElement("option");
// option3.text = "Jabalpur";
// option3.value = "ja";
// select.append(option,option1,option2,option3);
// td3.appendChild(select)

// .11.).. For focusing or showing active input filed we use focus() function.
// event.target.parentElement.previousElementSibling.focus();

// 12.).The main difference between foreach and map function is that foreach dosen't return anything and map function returns an array.

//  .13.). let a=[];let b=[]; console.log(a===b) => "false";

// .14.)let todos =[]; let a = todos; todos.push("1"); console.log(a===todos,a,todos)=>"true";

// .15) This is for generating new different id's for anything it's fully dynamic
// id: parseInt(new Date().getTime().toString()),

// .16) We can apply css in react by using ternory operator like this 
// <h1 style={obj}>{ok?a:b}</h1>
  
// .17) git rm --cached <file_path>       we can delete node module file while staging react project on github by following this command git rm -rf node_modules


