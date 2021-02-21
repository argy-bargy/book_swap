describe('user can add a book', () => {
  it('displays new book on page', () => {
    cy.visit('http://localhost:3000')
    cy.get('form[id="book_form"]').should('exist')
    cy.get('input[id="title"]').type('Harry Potter').should("have.value", "Harry Potter")
    cy.get('input[id="author"]').type('J.K. Rowling').should("have.value", "J.K. Rowling")
    cy.get('input[id="ISBN"]').type('12345').should("have.value", "12345")
    cy.get('input[id="phone_number"]').type('08546374586').should("have.value", "08546374586")
    cy.get('input[id="postcode"]').type('ABC123').should("have.value", "ABC123")
    cy.get('form[id="book_form"]').submit()
    cy.get('div[class="row"]').should('exist')
  })
})
