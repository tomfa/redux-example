import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Test from './containers/Test';
import NoMatch from './containers/NoMatch';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="test" component={Test}/>
  	<Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'))