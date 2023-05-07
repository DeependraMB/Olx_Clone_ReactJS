import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { firebaseContext } from './store/firebaseContext';
import {Firebase} from './firebase/config';


ReactDOM.render(
<firebaseContext.Provider value={{Firebase}}>
<Context>
<App />
</Context>
</firebaseContext.Provider>
, document.getElementById('root'));
