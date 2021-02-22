import React, { Component } from 'react'
import BookList from './components/bookList.js'
import BookForm from './components/bookForm.js'
import ErrorHandler from './components/errorHandler.js'
import Navigation from './components/navigation.js'
import Header from './components/header.js'
import Users from './components/users.js'
import {
  Switch,
  Route,
  HashRouter
} from 'react-router-dom'
import BookSearch from './components/bookSearch.js'
import BooksContainer from './components/booksContainer.js'

import axios from 'axios'
const PORT = 'http://localhost:3001'
const OPENLIBRARY = 'https://openlibrary.org'

class BookMeUp extends Component {
  constructor () {
    super()
    this.state = {
      books: [],
      book: {},
      bookISBN: '',
      bookTitle: '',
      bookAuthor: ''
    }
  }

  getBooks = () => {
    axios.get(`${PORT}/`)
      .then((result) => {
        this.setBooks(result.data)
      })
      .catch((err) => {
        this.setError(err)
      })
  }

  submitBook = (title, author, isbn, postcode, phoneNumber) => {
    // ADDRESS NEEDS CHECKING WITH BACKEND API
    axios.post(`${PORT}/add-book`, {
      book: JSON.stringify(this.state.book),
      user: { username: 'brad' , email: 'brad@example' , location: 'BS3 2LH' }
    })
      .then((result) => {
        console.log('result')
        this.getBooks()
      })
      .catch((err) => {
        console.log('error')
        this.setError(err)
      })

    this.setISBN('')
    this.setTitle('')
    this.setAuthor('')
  }

  submitISBN = (isbn) => {
    axios.get(`${OPENLIBRARY}/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`, {

    })
      .then((result) => {
        this.setISBN(isbn)
        this.setBook(result.data[`ISBN:${isbn}`])
        this.setTitle(result.data[`ISBN:${isbn}`].title)
        this.setAuthor(result.data[`ISBN:${isbn}`].authors[0].name)

      })
      .catch((err) => {
        console.log(err)
      })
  }

  setError (error) {
    this.setState({
      error: error
    })
  }

  setBooks (books) {
    this.setState({
      books: books
    })
  }

  componentDidMount () {
    this.getBooks()
  }

  setBook (book) {
    this.setState({
      book: book
    })
  }

  setISBN (isbn) {
    this.setState({
      bookISBN: isbn
    })
  }

  setTitle (title) {
    this.setState({
      bookTitle: title
    })
  }

  setAuthor (author) {
    this.setState({
      bookAuthor: author
    })
  }

  render () {
    return (
      <HashRouter>
        <div className="homepage">
          <ErrorHandler error={ this.state.error }/>
          <Navigation />
          <Header />
          <Switch>
            <Route path="/sign-up">
              <Users />
              <BooksContainer />
            </Route>
            <Route exact path="/">
              <BookSearch id="bookSearch" submitISBN={ this.submitISBN } />
              <BookForm id="bookForm" submitBook={ this.submitBook } bookISBN={ this.state.bookISBN } bookTitle={ this.state.bookTitle } bookAuthor={ this.state.bookAuthor } />
              <BookList books={ this.state.books }/>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default BookMeUp
