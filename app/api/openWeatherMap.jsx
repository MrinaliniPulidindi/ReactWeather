var axios = require('axios');

var OPEN_WEATHER_MAP_URL ="http://api.openweathermap.org/data/2.5/weather?&appid=6b0b4b0b8885127f39ad5340c4ae021a&units=imperial";

module.exports = {
  getTemp(location)
  {
var encodedLocation = encodeURIComponent(location);
var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

return axios.get(requestUrl).then(function(res)
{
  debugger;
  if(res.data.cod && res.data.message)
  throw new Error(res.data.message);
  else {
  return  res.data.main.temp;
  }
}, function(res)
{
  throw new Error(res.data.message);
});
  }
}
