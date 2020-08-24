import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/login/login.jsx';
import ViewClaim from './Components/viewClaims/viewClaims.jsx';
import Dashboard from './Components/dashboard/dashboard.jsx';
import Update from './Components/updateclaim/updateClaim.jsx';
import { Router, Route, Link, browserHistory, IndexRoute, useHistory, BrowserRouter } from 'react-router';
import AppRouter from './Components/common/appRoute.jsx';
//  import store from './store/store.js';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer.js';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render((
       <Provider store={store}>
              <  Router history={browserHistory}>
                     <Route path="/" component={AppRouter}>
                            <IndexRoute component={Login} />
                            <Route path="/viewClaim" component={ViewClaim} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/update" component={Update} />
                     </Route>
              </Router>
       </Provider>
), document.getElementById('router'));
