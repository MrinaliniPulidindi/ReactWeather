var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

getInitialState()
{
  return{
  isLoading: false
  }
},
handleSearch(location)
{
  var that= this;

  this.setState()
  {
isLoading: true
  };
  openWeatherMap.getTemp(location).then(function(temp)
{
  that.setState({
    location: location,
    temp: temp,
    isLoading: false
  });
}, function(res)
{
  that.setState({
    isLoading: false
  });
alert(res);
});
},

render: function(){
  var {isLoading, temp,location} = this.state;

function renderMessage()
{
  if(isLoading)
  {
    return <h3 className="text-center">Fetching Weather...</h3>;
  }
  else if(temp && location){
return  <WeatherMessage temp={temp} location={location}/>;
  }
}

    return(
      <div>
      <h1 className="text-center">Get Weather</h1>
    <WeatherForm OnSearch={this.handleSearch}/>
{renderMessage()}
    </div>
    );
  }
});

module.exports = Weather;
