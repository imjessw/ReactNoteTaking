var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports =(
  // below: when we render this app  the route (path="/") we will render the main component, which will always be showing
  <Route name="app" path="/" handler={Main}>
  	<DefaultRoute handler={Home} />
  </Route>
);
