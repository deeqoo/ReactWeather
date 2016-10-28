var React = require("react");

// statless function, arrow func
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is weather application built on React. I have built this to learn about React.</p>
      <p>Here are some of the tools I have used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> -
            This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather Map to search weather data by city name.
        </li>

      </ul>
    </div>

  );
}
module.exports = About;
