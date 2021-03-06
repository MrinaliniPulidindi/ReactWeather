var React = require('react');

var WeatherForm = React.createClass({
 onFormSubmit(e)
 {
   e.preventDefault();
   var location = this.refs.location.value;
   if(location.length>0)
   {
     this.refs.location.value='';
     this.props.OnSearch(location);
   }
 },

  render(){
    return(
      <div>
            <form onSubmit={this.onFormSubmit}>
              <input type="text" ref="location"/>
              <button className="button expanded">Get Weather</button>
            </form>
          </div>
    );
  }
});

module.exports = WeatherForm;
