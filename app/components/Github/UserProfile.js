var React = require('react');



var UserProfile = React.createClass({
	render: function() {
		return (
			<div> 
				<p>User Profile!</p>
				<p>Username: {this.props.username}</p>
				<p>Bio: {this.props.bio.name}</p>
			</div>
		);
	}
})

module.exports= UserProfile;