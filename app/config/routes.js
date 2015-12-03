var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports =(
  // below: when we render this app ath teh route (path="/") we will render the main component
  <Route name="app" path="/" handler={Main}>
  </Route>
);
