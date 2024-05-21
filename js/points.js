


// 1.) "if the string only contains upper and lower case characters then it returns true which means the string should only have upper and lower case characters-:-And the second conditioon checks if the string contains only charecters then it return true otherwise it returns false"
// let str = "abc";
// check(str)
// function check(str){
// if(/^[a-zA-Z]+$/.test(str)===true) {
// console.log("chha gaye guru");
// }
// else{
//     console.log("Invalid");
// }
// if(/[a-z]/.test(str) === true) {
// console.log("yes");
// }
// else{
//     console.log("no")
// }
// }

// 2) This code tells about radio buttons how to catch radio buttons value like it is clicked or not in javascript and based on this we can do our work 

// function isRadioButton(){
// <!DOCTYPE html>
// <html>
// <head>
//     <title>
//         Get value of selected
//         radio button
//     </title>
// </head>
// <body>
//     <p>
//         Select a radio button and click on Submit.
//     </p>
//     Gender:
//     <input type="radio" name="gender" value="Male">Male
//     <input type="radio" name="gender" value="Female">Female
//     <input type="radio" name="gender" value="Others">Others
//     <br>
//     <button type="button" onclick="displayRadioValue()">
//         Submit
//     </button>
//     <br>
//     <div id="result"></div>  
//     <script>
//         function displayRadioValue() {
//             var ele = document.getElementsByName('gender');
//             for(i = 0; i < ele.length; i++) {
//                 if(ele[i].checked)
//                 document.getElementById("result").innerHTML
//                         = "Gender: "+ele[i].value;
//             }
//         }
//     </script>
// </body>
// </html>           
//  }

// let id = null;
//     if(localStorage.data !== undefined){
//     id = JSON.parse(localStorage.data).length+1
//    }
//    else{
//     id=1
//   }









//  {var selectedRow = null;
// var btn = document.querySelector(".close-btn")
// btn.addEventListener("click"  , Newdata);
// function Newdata() {
// var value1 = getdata()
// x.map((ele)=>{
//   let tbody = document.getElementsByTagName("tbody")[0];
//   let tr = document.createElement("tr")
//   let td0 =  document.createElement("td")
//   let td1 =  document.createElement("td")
//   td1.innerHTML= ele.fname
//   let td2 =  document.createElement("td")
//   td2.innerHTML= ele.contact
//   let td3 =  document.createElement("td")
//   td3.innerHTML= ele.email
//   let td4 =  document.createElement("td")
//   td4.innerHTML= ele.birth
//   let td5 =  document.createElement("td")
//   td5.innerHTML= ele.gender
//   let td6 =  document.createElement("td")
//   td6.innerHTML= ele.message
//   tr.append(td0,td1,td2,td3,td4,td5,td6)
//   tbody.append(tr)
// })
// loaded()
// if (selectedRow==null){
//   createData(value1);
// }
//   else {
//     updateTabdata(value1)
//     selectedRow = null;
//   }
// }
// // function clearData() {
// //   localStorage.clear()
// // }
// function getdata() {
//   let val;
//   var x = []
//   var inputdata = {}
//       var ele = document.getElementsByName('gender');
//       for (let i = 0; i < ele.length; i++) {
//         if (ele[i].checked) {
//           val = ele[i].value
//         } else if(val==undefined){
//           val = ""
//         }
//       }
//   inputdata["fname"] = document.querySelector("#fname").value;
//   inputdata["contact"] = document.querySelector("#contact").value;
//   inputdata["email"] = document.querySelector("#email").value;
//   inputdata["birth"] = document.querySelector("#birth").value;
//   inputdata["gender"] = val
//   inputdata["message"] = document.querySelector("#message").value;
// x.push(inputdata)
// localStorage.setItem("x", JSON.stringify(x))
// return x
// }
// var x
// function loaded(){
//  x = JSON.parse(localStorage.getItem("x"));
// }
// // for (let i = 0; i<arr; i++) {
// //  let one = document.createElement("tr","td").value;
// //  one.innerHTML = "";
// //  debugger
// //  var tbl = document.createElement("table");
// // document.appendChild(one);
// // // console.log(one)
// // }
// // console.log(arr)
// function createData(arr) {
//   var formtable =  document.querySelector(".table");
//   var form_tr = formtable.insertRow(formtable.length);
//   var formdata1 = form_tr.insertCell(0);
//   var formdata2 = form_tr.insertCell(1);
//   var formdata3 = form_tr.insertCell(2);
//   var formdata4 = form_tr.insertCell(3);
//   var formdata5 = form_tr.insertCell(4);
//   var formdata6 = form_tr.insertCell(5);
//   var formdata7 = form_tr.insertCell(6);
//   var formdata8 = form_tr.insertCell(7);
// }
// // loop{
// //   inht = ""
// //   create tr => td> value
// //   inht = inht + create
// //   tbl-body = innerhtml => inht
// // }
//   // var totalformData = document.querySelector(".table tr").length;
//   // formdata1.innerHTML = formtable.rows.length-1
//   // formdata2.innerHTML = arr.fname;
//   // formdata3.innerHTML = arr.contact;
//   // formdata4.innerHTML = arr.email;
//   // formdata5.innerHTML = arr.birth;
//   // formdata6.innerHTML = arr.gender
//   // formdata7.innerHTML = arr.message
//   // formdata8.innerHTML = '<a class="edit" onClick="EditData(this)">Edit</a>  / <a class="dlt" onClick="Delete(this)">Delete</a>';
// // function updateTabdata(arr){
// //     selectedRow.cells[1].innerHTML = ele.fname;
// //     selectedRow.cells[2].innerHTML = ele.contact;
// //     selectedRow.cells[3].innerHTML = ele.email;
// //     selectedRow.cells[4].innerHTML = ele.birth;
// //     selectedRow.cells[5].innerHTML = ele.gender;
// //     selectedRow.cells[6].innerHTML = ele.message;
// // }
// // function removeData() {
// //   document.querySelector("#fname").value= "";
// //   document.querySelector("#contact").value= "";
// //   document.querySelector("#email").value= "";
// //   document.querySelector("#birth").value= "";
// //   document.querySelector("#gender").value= "";
// //   document.querySelector("#message").value= "";
// // }
// white_check_mark
// eyes
// raised_hands





// New
// 6:22
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="style.css">
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
//   <title>User Form</title>
// </head>
// <body style="background-color: cornflowerblue;"onload="loaded()" >
//   <div>
//     <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn1">Open Form</button>
//     <div>
//       <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
//         aria-labelledby="staticBackdropLabel" aria-hidden="true">
//         <div class="modal-dialog modal-dialog-centered">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="staticBackdropLabel">Registration Form</h1>
//             </div>
//             <div class="modal-body">
//               <form onsubmit="event.preventDefault();" autocomplete="off">
//                 <div class="form-group"autocomplete="off">
//                   <label for="name">Name</label>
//                   <input type="text" class="form-control" placeholder="Full Name" id="fname" required />
//                   <label for="number">Contact</label>
//                   <input type="number" class="form-control" placeholder="Contact" id="contact"
//                     required />
//                   <label for="email">Email</label>
//                   <input type="email" class="form-control" placeholder="Email" id="email"  required />
//                   <label for="DOB">Date of Birth</label>
//                   <input type="text" class="form-control" placeholder="DOB" id="birth"  required />
//                   <label>Gender</label>
//                   &nbsp; &nbsp; &nbsp; <input type="radio" name="gender" value="male" /> Male
//                   &nbsp; &nbsp; <input type="radio" name="gender" value="female" /> Female
//                   &nbsp; &nbsp; <input type="radio" name="gender" value="other" /> Other<br />
//                   <label>Message</label>
//                   <textarea class="form-control"  rows="2" id="message"
//                     placeholder="Leave your message here" required></textarea>
//                 </div>
//               </form>
//             </div>
//             <div class="modal-footer">
//               <button type="submit" class="btn btn-success close-btn" data-bs-dismiss="modal"
//                 onclick="getdata()">Submit</button>
//               <button type="button" class="btn btn-danger submit-btn" >Clear</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <table class="table" id="table1">
//       <thead>
//         <tr>
//           <!-- <th scope="col">Sr No.</th> -->
//           <th scope="col">Sr No.</th>
//           <th scope="col">Name</th>
//           <th scope="col">Contact</th>
//           <th scope="col">Email</th>
//           <th scope="col">DOB</th>
//           <th scope="col">Gender</th>
//           <th scope="col">Message</th>
//           <th scope="col">Option</th>
//         </tr>
//         <tbody id="tbl-body">
//         </tbody>
//       </thead>
//       <tbody >
//         <!-- <tr id="finalvalue">
//           <th scope="row"></th>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//           <td><a href="" class="btn btn-warning btn-sm Edit">Edit</a>
//             <a href="" class="btn btn-danger btn-sm delete">Delete</a>
//           </td>
//         </tr> -->
//       </tbody>
//     </table>
//   </div>
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
//     integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
//     crossorigin="anonymous"></script>
//     <script type = "text/javascript" src="script.js"></script>
// </body>
// </html>}



































// // let fivepaisa = 0
// // let arr = [5,5,10,20,];
// // let wt = []
// // let ot = [];
// // let start = true;
// // for(let i = 0;i<arr.length;i++){
// //     if(arr[i] ==5){
// //         wt.push(arr[i]);
// //         start = true;
// //         ot.push(start);
// //         fivepaisa++;
// //         // console.log(start)
// //     }
// //     else if(arr[i] ===10){
// //         if(wt.length>0){
// //            for(let j = 0;j<wt.length;j++){
// //             if(wt[j]===5){
// //                 wt.splice(j,1)
// //                 wt.push(arr[i])
// //              start = true;
// //              ot.push(start);
// //             //  console.log(start)
// //             }
// //             else{
// //                 start = false;
// //                 ot.push(start);
// //                 // console.log(start)
// //             }
// //           }
// //         }else{
// //             start = false;
// //             ot.push(start);
// //             // console.log(start)
// //         }
// //     } 
// //     else if(arr[i] ===20){
// //         if(wt.length>0){
// //            for(let j = 0;j<wt.length;j++){
// //             if(wt[j]===5){
// //                 fivepaisa++;
// //             }
// //         }
// //         for(let j = 0;j<wt.length;j++){
// //              if(fivepaisa>=1&& wt[j]===10){
// //                 // console.log(wt)
// //                 wt.splice(j,1);
// //                 fivepaisa--;
// //                 wt.push(arr[i]);
// //                 start = true;
// //                 ot.push(start);
// //                 // console.log(start)
// //             }
// //         //    else if(fivepaisa===3){
// //         //         start = true;
// //         //     }
// //             // else{
// //             //     start = false;
// //             //     console.log(start)
// //             // }
// //         }
// //         }
// //     }
// // }
// // // if(start === false){
// // //     console.log(start)
// // // }
// // // else{
// // //     console.log(true)
// // // }
// // let output = 0;
// // console.log(ot)
// // for(let i = 0;i<ot.length;i++) {
// //     if(ot[i]===false){
// //         output++;
// //     }
// // }
// // if(output>0){
// //     console.log(false)
// // }else{
// //     console.log(true)
// // 



// music record page

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecords } from "../Redux/action";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.musicRecords);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      //dispatch(getMusicRecords())
      dispatch(getMusicRecords(queryParams));
    }
  }, [location.search]);

  return (
    <>
      {musicRecords.length > 0 &&
        musicRecords.map((album) => {
          return (
            <MusicRecordsWrapper key={album.id}>
              <div>{album.name}</div>
              <div>
                <img src={album.img} alt={album.name} />
              </div>
              <div>{album.genre}</div>
              <div>{album.year}</div>
            </MusicRecordsWrapper>
          );
        })}
    </>
  );
};

// export default MusicRecords;

const MusicRecordsWrapper = styled.div`
  width: 300px;
  border: 1px solid green;
`;





// filter sort component


import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("genre");
  const initialSortParams = searchParams.get("sortBy");
  const [category, setCategory] = useState(initialGenreParams || []);
  const [sortBy, setSortBy] = useState(initialSortParams || "");

  const handleGenreChange = (e) => {
    const option = e.target.value;
    //if the option is already present in the category, remove it
    //else add it in the category array
    let newCategory = [...category];
    if (category.includes(option)) {
      //remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      //add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    //if the category changes then reflect it on the URL search as well
    if (category || sortBy) {
      setSearchParams({ genre: category, sortBy: sortBy });
    }
  }, [category, setSearchParams, sortBy]);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("K-Pop")}
          value="K-Pop"
          onChange={handleGenreChange}
        />
        <label>K-Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Country")}
          value="Country"
          onChange={handleGenreChange}
        />
        <label>Country</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Pop")}
          value="Pop"
          onChange={handleGenreChange}
        />
        <label>Pop</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Holiday")}
          onChange={handleGenreChange}
          value="Holiday"
        />
        <label>Holiday</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleGenreChange}
          value="Heavy Metal"
        />
        <label>Heavy Metal</label>
      </div>

      <h3>Sort</h3>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            name="sortBy"
            value="desc"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

// export default FilterSort;





// 1.)todo.jsx

import React, { useCallback, useState } from "react";
import TodoItems from "./TodoItems";

const initialState = [
  { id: 1, status: false, title: "Task 1" },
  { id: 2, status: false, title: "Task 2" },
  { id: 3, status: false, title: "Task 3" },
];

const Todo = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState(initialState);

  const handleInputChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleAddTask = () => {
    if (currentTodo) {
      const payload = {
        id: todos.length + 1,
        status: false,
        title: currentTodo,
      };

      setTodos([...todos, payload]);
      setCurrentTodo("");
    }
  };

  //useEffect(() => {
  //  //logic
  //}, [value])

  /*
  useCallback(() => {
    return function()
  },[value])
*/

  //   const toggleStatus = useCallback(
  //     (id) => {
  //       let newTodos = todos.map((item) =>
  //   item.id === id ? { ...item, status: !item.status } : item
  //       );
  //       setTodos(newTodos);
  //     },
  //     [todos]
  //   );

  const toggleStatus = useCallback((id) => {
    setTodos((prev) => {
      prev.map((item) => {
        return item.id === id ? { ...item, status: !item.status } : item;
      });
    });
  }, []);

  //   const deleteTask = useCallback(
  //     (id) => {
  //       let newTodos = todos.filter((item) => item.id !== id);
  //       setTodos(newTodos);
  //     },
  //     [todos]
  //   );

  const deleteTask = useCallback((id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <div>
      <h1>Todo Application</h1>
      <input value={currentTodo} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add</button>
      {todos.length &&
        todos.map((item) => {
          return (
            <TodoItems
              key={item.id}
              {...item}
              toggleStatus={toggleStatus}
              deleteTask={deleteTask}
            />
          );
        })}
    </div>
  );
};

export default Todo; 




// 2.)TodoItems.jsx 


import React, { useEffect, useMemo, useState } from "react";

const expensiveOperation = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    continue;
  }
  return true;
};

const TodoItems = ({ status, id, title, toggleStatus, deleteTask }) => {
  //this function is going to take some time for executing
  const isItDone = useMemo(() => expensiveOperation(200), []); //synchronous

  console.log("Rendering TodoItems", id);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginRight: "20px" }}>{title}</div>
      <div>{status ? "True" : "False"}</div>
      <button onClick={() => toggleStatus(id)}>Toggle</button>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
};

// const equalityFunction = (prev, curr) => {
//   console.log(prev.toggleStatus === curr.toggleStatus);
// };

// export default TodoItems;

//useSelector((store) => store.state, shallowEqual)




// 3.) test.jsx


const memoFuc = (func) => {
  const cache = {};
  return (input) => {
    return cache[input] || (cache[input] = func(input));
  };
};

//fibonnaci sum
const fib = memoFuc((n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
});

console.time("T1");

console.log(fib(500));

//It stops recomputing the same logic again and again for the same input, if that input has already been calculated.

console.timeEnd("T1");



// 4.)readme

// Understanding what is memoization
// How the components were re-rendering with some state change in the parent component.
// - Console.logs, - Profiler Tool
// - Expensive operation - synchronous -> stopping the execution thread in JS, whole was feeling a bit slow/laggy.
// Props (not changing) -> don't re-render;
// - React.memo -> HOC -> prevProps === currentProps -> true (don't render) else if false -> (re-render)
// It fails, when we pass objects, reference data types as objects
// === -> will always return false
// second argument of React.memo -> function (prevProps, currentProps) -> custom Equality check
// useCallback () -> store the reference of the function objects
// useMemo () -> store the value
// array of dependency change (useCallback, useMemo, -> useEffect)