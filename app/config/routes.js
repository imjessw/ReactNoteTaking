var React = require('react');
var Main = require('../components/Main.js');
var Home = require('../components/Home.js');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;


module.exports=(
	<Route path='/' component={Main}>

		<IndexRoute component= {Home}/>
		
	</Route>
)