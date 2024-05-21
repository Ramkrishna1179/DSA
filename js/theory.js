// 1.)CI stands for Continuous Integration, and CD stands for Continuous Deployment (or Continuous Delivery).
//  CI/CD is a set of practices that help automate the process of testing and deploying your application. It ensures that your app is consistently built, tested, and deployed, reducing the chances of bugs and making the deployment process faster and more reliable.

// -------------------------------------------------------------------------------------------

// 2.) Bob: Can you explain the concept of “staging” and “production” environments?

// Tom: Staging and production environments are crucial in CI/CD. Staging is a replica of your production environment where you test changes before deploying to production. It helps catch issues early. The production environment is where your live app resides and is accessible to users.

// -------------------------------------------------------------------------------------------

// 3.) Shallow Copy And Deep Copy

// Creates a new object or array that references the same properties of the original object or array.
// Changes made to the copied object's properties will also affect the original object's properties, since they point to the same memory locations.

// const original = { name: 'Alice', department: { team: 'Engineering' } };
// const shallowCopy = { ...original };

// console.log(original);   // { name: 'Alice', department: { team: 'Engineering' } }
// console.log(shallowCopy); // { name: 'Alice', department: { team: 'Engineering' } }

// shallowCopy.department.team = 'Marketing';

// console.log(original);   // { name: 'Alice', department: { team: 'Marketing' } } (Modified!)
// console.log(shallowCopy); // { name: 'Alice', department: { team: 'Marketing' } }

// -------------------------------------------------------------------------------------------

// Deep Copy

// Creates a completely new object or array with entirely independent copies of all properties, including any nested objects or arrays.
// Changes made to the copied object's properties will not affect the original object's properties.

// const original = { name: 'Alice', department: { team: 'Engineering' } };
// const deepCopy = JSON.parse(JSON.stringify(original));

// console.log(original);   // { name: 'Alice', department: { team: 'Engineering' } }
// console.log(deepCopy);  // { name: 'Alice', department: { team: 'Engineering' } }

// deepCopy.department.team = 'Marketing';

// console.log(original);   // { name: 'Alice', department: { team: 'Engineering' } } (Unchanged)
// console.log(deepCopy);  // { name: 'Alice', department: { team: 'Marketing' } }

// -------------------------------------------------------------------------------------------

// 4.) HOC
// In React, a Higher-Order Component (HOC) is a pattern for reusing component logic. It is a function that takes a component as input and returns a new component with extended functionality or behavior.

// 5.) Cors in React
// CORS is a security mechanism implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the page. This prevents malicious scripts from stealing data from other websites.


// 6.) Rest Spread
//  The key difference is that the rest operator is used to collect elements into an array or object, while the spread operator is used to spread or expand elements from an array or object.

// Rest 

//  function sum(...numbers) {
//     console.log("🚀 ~ sum ~ numbers:", typeof (numbers),numbers)
    
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15




// function PrintPrime(num) {
//     if (num <= 1) {
//         return `${num} is not prime`;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return `${num} is not prime`;
//         }
//     }
//     return `${num} is prime`;
// }

// for (let index = 2; index < 101; index++) {
//     console.log("🚀 ~ PrintPrime:", PrintPrime(index));
// }
