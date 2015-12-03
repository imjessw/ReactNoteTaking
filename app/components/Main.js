var React = require('react');
// React.createClass creates the component for us. You have a few properties you can pass in, we are using render
var Main = React.createClass({
  // render specifies what the UI looks like for this specific element
  render: function(){
    return (
      <div>
        Hello World!!!
      </div>;
    )
  }
});

// when you declare the <Main /> you are telling react what component to render and "document.getElementById('app')"where to render to.
React.render(<Main />, document.getElementById('app'));
