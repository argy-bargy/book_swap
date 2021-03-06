import React from 'react'
import PropTypes from 'prop-types'
import UserSignup from './userSignup.js'

class HeaderUserNew extends React.Component {
  render () {
    return (
      <div className="header col-12">
        <div className="header-content col-12 col-md-6 offset-md-3">
          <img src="images/logonegative.png"></img>
          <h1>Sign Up To Book Me Up!</h1>
          <UserSignup id="usersignupform" addUser={ this.props.addUser } />
        </div>
      </div>
    )
  }
}

HeaderUserNew.propTypes = {
  addUser: PropTypes.func
}

export default HeaderUserNew
