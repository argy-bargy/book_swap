import React from 'react';

class Navigation extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="#">
          <img src="images/logo.png" width="150" height="150"></img>
        </a>
        <div className="searchform col-6">
          <form className="form-inline search-form">
          <input className="form-control col-4 mr-sm-2" type="search" placeholder="Search author, title, ISBN number... " aria-label="Search"/>
          <div className="searchform-append">
            <button className="btn btn-outline-secondary btn-sm">Find a book</button>
          </div>
          </form>
        </div>
        <div className="col-2 offset-2">
          <a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a><br/>
          <a href="#"><span className="glyphicon glyphicon-log-in"></span> Log In</a><br/>
          <a href="#"><span className="glyphicon glyphicon-log-in"></span> Log Out</a><br/>
          <a href="#"><span className="glyphicon glyphicon-log-in"></span> My Bookshelf</a><br/>
          <a href="#"><span className="glyphicon glyphicon-log-in"></span> Wishlist</a>
        </div>
      </nav>
  )}
 }

export default Navigation;
