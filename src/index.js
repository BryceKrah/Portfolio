import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter, { Router, browserHistory, Route, Link } from 'react-router';
import About from './containers/about';
import Skills from './containers/skills';
import Work from './containers/work';
import Contact from './containers/contact';



import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="about" component={About} />
      <Route path="skills" component={Skills} />
      <Route path="work" component={Work} />
      <Route path="contact" component={Contact} />
    </Router>
  , document.querySelector('.container'));
