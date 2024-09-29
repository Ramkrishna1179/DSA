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
