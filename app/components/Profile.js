var React = require('react');
var Router = require('react-router');
var Repos =require('./Github/Repos');
var UserProfile =require('./Github/UserProfile');
var Notes =require('./Notes/Notes');

var Profile = React.createClass({
	getInitialState: function() {
		return {
			notes:[],
			bios:{},
			repos:[], 
		};
	},
	render: function(){
		console.log(this.props)
		return(
			<div className='row'>
				<div className="col-md-4">
					<UserProfile />
				</div>

				<div className="col-md-4">
					<Repos />
				</div>

				<div className="col-md-4">
					<Notes />
				</div>
			</div>

		)

	}
})

module.exports = Profile;