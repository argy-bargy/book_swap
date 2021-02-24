import React from 'react'
import PropTypes from 'prop-types'
import BookContainer from './bookContainer.js'

class BookList extends React.Component {
  render () {
    console.log(this.props.books)
    if (this.props.books) {
      return (
        <div className='container col-12'>
          <div className="book_list" id="books_list" key='books_list'>
              <div className='row'>
                {this.props.books.map(data =>
                  < BookContainer key={data._id} className='book' data={data} requestBook={this.props.requestBook}/>
                )}
              </div>
          </div>
        </div>
      )
    } else {
      return (
      <div className="book_list">
        <div className='books_list'>no books</div>
      </div>
      )
    }
  }
}

BookList.propTypes = {
  books: PropTypes.array,
  requestBook: PropTypes.func
}

export default BookList
