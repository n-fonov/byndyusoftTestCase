describe('test case', () => {
  it('find the first link', () => {
    cy.visit('https://www.google.ru/')
	cy.get('input[class="gLFyf"]').type('Byndyusoft{enter}')
    cy.get('.eKjLze > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)')
     .should('have.attr', 'href')
     .then((href) => {
       cy.visit(href)
	   cy.origin(href, () => {
		cy.get('div.product:nth-child(2) > div:nth-child(1) > div:nth-child(5) > span:nth-child(1)').click()
		cy.get('.popup-callback__footer-contacts').contains('sales@byndyusoft.com').should('be.visible') 
	   })	
     })
})
})
