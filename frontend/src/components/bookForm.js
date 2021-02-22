import React from 'react'
import PropTypes from 'prop-types'

class BookForm extends React.Component {
  constructor () {
    super()
    this.state = {
      title: '',
      author: '',
      isbn: '',
      postcode: '',
      phoneNumber: ''
    }
  }

  changeTitleValue (change) {
    this.setState({
      title: change
    })
  }

  changeAuthorValue (change) {
    this.setState({
      author: change
    })
  }

  changeIsbnValue (change) {
    this.setState({
      isbn: change
    })
  }

  changePostcodeValue (change) {
    this.setState({
      postcode: change
    })
  }

  changePhoneNumberValue (change) {
    this.setState({
      phoneNumber: change
    })
  }

  processSubmit (e) {
    e.preventDefault()
    this.props.submitBook(this.state.title, this.state.author, this.state.isbn, this.state.postcode, this.state.phoneNumber)
    this.changeTitleValue('')
    this.changeAuthorValue('')
    this.changeIsbnValue('')
    this.changePostcodeValue('')
    this.changePhoneNumberValue('')
  }

  render () {
    return (
      <div className="add_book col-12 col-md-5">
        <form id="book_form" onSubmit={ (e) => this.processSubmit(e) }>
          <div className='row'>
            <label className="text-right col-sm-6 col-form-label">Title: </label>
            <div className="col-sm-6">
              <input type="text" className='col-12' name="title" id="title" onChange={(e) => this.changeTitleValue(e.target.value)} value={this.state.title} />
            </div>
          </div>
          <div className='row'>
            <label className="text-right col-sm-6 col-form-label">Author: </label>
            <div className="col-sm-6">
              <input type="text" className='col-12' name="author" id="author" onChange={(e) => this.changeAuthorValue(e.target.value)} value={this.state.author} />
            </div>
          </div>
          <div className='row'>
            <label className="text-right col-sm-6 col-form-label">ISBN: </label>
            <div className="col-sm-6">
              <input type="text" className='col-12' name="ISBN" id="ISBN" onChange={(e) => this.changeIsbnValue(e.target.value)} value={this.state.isbn} />
            </div>
          </div>
          <div className='row'>
            <label className="text-right col-6 col-form-label">Phone Number: </label>
            <div className="col-6">
              <input type="text" className='col-12' name="phone_number" id="phone_number" onChange={(e) => this.changePhoneNumberValue(e.target.value)} value={this.state.phoneNumber} />
            </div>
          </div>
          <div className='row'>
            <label className="text-right col-6 col-form-label">Postcode: </label>
            <div className="col-6">
              <input type="text" className='col-12' name="postcode" id="postcode" onChange={(e) => this.changePostcodeValue(e.target.value)} value={this.state.postcode} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-6 offset-6">
              <button className="col-12 btn btn-md" type="submit" name="submit" id="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

BookForm.propTypes = {
  submitBook: PropTypes.func
}

export default BookForm
