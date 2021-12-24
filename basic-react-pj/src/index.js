import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*
Embedding Expressions in JSX
*/

// const value = 'Embedding Expressions in JSX'
// const element = <h1>Hello ,{value}</h1>

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Kim',
//   lastName: 'HyeongMin'
// }

// const element = (
//   <h1>
//     Hello~ , {formatName(user)}
//   </h1>
// )

/*
JSX is an Expression Too
*/
// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}</h1>
//   } else {
//     return <h1>Hello, Stranger</h1>
//   }
// }

/*
JSX Prevents Injection Attacks
By default, React DOM escapes any values embedded in JSX before rendering them.
Thus it ensures that you can never inject anything that’s not explicitly written in your application. 
Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
*/
const title = response.potentiallyMaliciousInput;
const element = <h1>{title}</h1>

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  element,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
