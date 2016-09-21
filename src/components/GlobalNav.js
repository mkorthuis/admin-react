import React, { Component } from 'react'
import { Link } from 'react-router'
import './GlobalNav.scss'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.activeLink = {
  ...styles.link,
  background: light,
  color: dark
}

class GlobalNav extends Component {

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }

  render() {
    const { user } = this.props

    return (
      <div className='wrapper'>
        <div style={{ float: 'left' }}>
          <Link to="/" className='link'>Home</Link>{' '}
          <Link to="/patient" className="link" activeStyle={styles.activeLink}>Patient</Link>{' '}
        </div>
        <div style={{ float: 'right' }}>
          <button onClick={this.logOut}>log out</button>
        </div>
      </div>
    )
  }
}

GlobalNav.defaultProps = {
  user: {
    id: 1,
    name: 'Ryan Florence'
  }
}

export default GlobalNav
