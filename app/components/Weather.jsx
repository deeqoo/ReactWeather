var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

getInitialState: function(){
  return {
    isLoading: false
  }
},

handleSearch: function(location){
  var that = this;

  this.setState({
    isLoading: true,
    errorMessage: undefined
   });

  OpenWeatherMap.getTemp(location).then(function(temp){
    that.setState({
      location: location,
      temp: temp,
      isLoading: false
    });
  }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
  });
},
  render: function(){
    var {isLoading, temp, errorMessage,location} = this.state;

    function renderMessage(){
      if (isLoading) {
        return <h4 className="text-center">Fetching weather....</h4>;
      }else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError (){
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }

    }
     return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }
});

module.exports = Weather;
