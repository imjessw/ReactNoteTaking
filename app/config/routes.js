var React = require('react');
var Main = require('../components/Main.js');
var Home = require('../components/Home.js');
var Profile = require('../components/Profile.js')
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;


module.exports=(
	<Route path='/' component={Main}>
		<Route path="profile/:username" component={Profile} />

		<IndexRoute component= {Home}/>

	</Route>
)