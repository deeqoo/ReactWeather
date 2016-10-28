var React = require("react");
var {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are few examples location to try out:</p>
      <ol>
        <li>
          <Link to="/?location=London">London, UK</Link>
        </li>
        <li>
          <Link to="/?locaiton=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>

  );
}
module.exports = Example;
