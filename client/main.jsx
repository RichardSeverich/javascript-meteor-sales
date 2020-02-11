// Meteor
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// React
import React from 'react';

// React - Router
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../imports/ui/AppRoutes';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from '../imports/ui/redux/reducers/CounterReducer'

// User Accounts
import '../imports/startup/accounts-confg.js';

const initialState = 0;

const store = createStore (
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )

Meteor.startup(() => {
  render((
    <Provider store={store}>
        <Router>
            <AppRoutes/>
        </Router>
    </Provider>),
    document.getElementById('react-target')
  );
});
