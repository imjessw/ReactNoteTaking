var React = require('react');
console.log (" react is alive")
// React.createClass creates the component for us. You have a few properties you can pass in, we are using render
var Main = React.createClass({
  // render specifies what the UI looks like for this specific element
  render: function(){
    return (
      <div>
        Hello World!!!
      </div>
    )
  }
});

// Now when we require Main we can just call it
module.exports= Main;
