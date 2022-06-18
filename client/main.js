import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/App';
import * as serviceWorker from '../shared/serviceWorker';

function run() {
  ReactDOM.hydrate(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById('app'),
  );
}

const loadedStates = ['complete', 'loading', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
