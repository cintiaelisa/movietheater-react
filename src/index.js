import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import registerServiceWorkes from './serviceWorker';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


serviceWorker.register();
//serviceWorker.unregister();
