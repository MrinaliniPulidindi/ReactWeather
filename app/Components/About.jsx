var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
      <h3 className="text-center">About</h3>
      <p>This is a weather application build on React</p>
      <p>Here are some of the tools I used:
      </p>
      <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework used.
      </li>
      <li>
        <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to fetch weather for the given city.
      </li>
      </ul>
      </div>
    );
  }
});

module.exports = About;
