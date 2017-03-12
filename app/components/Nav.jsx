var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Conference of Champions App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Schedule</IndexLink>
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>What's the time back home?</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Logged in as:
            </li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Login</IndexLink>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
