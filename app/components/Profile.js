var React = require('react');
var Router = require('react-router');
var Repos =require('./Github/Repos');
var UserProfile =require('./Github/UserProfile');
var Notes =require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase= require('firebase');

var Profile = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function() {
		return {
			notes:[1,2,3],
			bio:{
				name:'Jess'
			},
			repos:['a','b','c'], 
		};
	},
	// This is where you would put in you ajax requests & firebase listeners
	componentDidMount: function(){
		this.ref = new Firebase('https://github-note-taker.firebaseio.com/'); 
		var childRef = this.ref.child(this.props.params.username);
		// our react mixin took our context and added a few properties
		// bindAsArray takes two args: 1) ref to your argument 2) the property on your state you want to bind to.
		this.bindAsArray(childRef, 'notes');
	},
	componentWillUnmount:Function(){
		this.unbind('notes');
	},
	render: function(){
		console.log(this.props)
		return(
			<div className='row'>
				<div className="col-md-4">
					<UserProfile username={this.props.params.username} bio={this.state.bio}/>
				</div>

				<div className="col-md-4">
					<Repos repos={this.state.repos}/>
				</div>

				<div className="col-md-4">
					<Notes notes={this.state.notes}/>
				</div>
			</div>

		)

	}
})

module.exports = Profile;