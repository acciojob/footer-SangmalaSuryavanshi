describe('Footer Test', () => {
  it('should display footer elements correctly', () => {
    cy.visit('http://localhost:3000/');
    
    // Check if the .footer-container has a display of flex
    cy.get('.footer-container').should('have.css', 'display', 'flex');

    // Check for contact number presence
    cy.get('.footer-container').contains('8879887262');

    // Check for presence of text in the footer sections
    cy.get('.footer-container').contains('Home');
    cy.get('.footer-container').contains('About');
    cy.get('.footer-container').contains('Links');
    cy.get('.footer-container').contains('Services');
    cy.get('.footer-container').contains('Contact');
  });
});
