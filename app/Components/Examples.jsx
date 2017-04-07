var React = require('react');
var {Link} = require('react-router');
var Examples = React.createClass({
  render: function(){
    return(
      <div>
      <h1 className="text-center">Examples</h1>
      <p>Examples to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Jacksonville'>
             Jacksonville, FL
          </Link>
        </li>
        <li>
        <Link to='/?location=Philedelphia'>
           Philedelphia, PA
        </Link>
      </li>
      </ol>
    </div>
    );
  }
});

module.exports = Examples;
