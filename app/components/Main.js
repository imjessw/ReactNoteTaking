var React = require('react');
var RouteHandler= require('react-router').RouteHandler;





console.log (" react is alive")
// React.createClass creates the component for us. You have a few properties you can pass in, we are using render
var Main = React.createClass({
  // render specifies what the UI looks like for this specific element
  render: function(){
    return (
    	<div className="main-container">
    		<nav className='navbar nabvar-default' role="navigation">
    			<div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
    				Menu
    			</div>
    		</nav>
    		<div className="container">
    			<RouteHandler />
    		</div>
    	</div>
    )
  }
});

// Now when we require Main we can just call it
module.exports= Main;
