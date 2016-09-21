import React, { Component } from 'react'
import GlobalNav from './GlobalNav'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalNav />
        <div style={{ padding: 20 }}>
          {this.props.children || <Home /> }
        </div>
      </div>
    )
  }
}

module.exports = App
