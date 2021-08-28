import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// function updateTime() {
//   ReactDOM.render(
//     <h1>{new Date().toLocaleTimeString()}</h1>,
//     document.getElementById('root')
//   )
// }
// setInterval(updateTime, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
