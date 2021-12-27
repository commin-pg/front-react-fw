import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

// Redux - Store import
import App, { reducer } from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reudx - Store import end

const store = createStore(reducer); // 여러개의 reducer를 store가 관리

ReactDOM.render(
  <Provider store={store}> {/* Provider가 App Component로 store 제공 */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
