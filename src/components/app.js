import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-light bg-faded">
          <Link to='/' className="navbar-brand">Simple Blog with ReactJS and Redux</Link>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
