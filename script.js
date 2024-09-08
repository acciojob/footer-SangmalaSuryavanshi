cy.visit('http://localhost:3000/');
cy.get('body').then(($body) => {
  // Check if the element exists
  if ($body.find('.link-boxes').length > 0) {
    // Element exists
    cy.get('.link-boxes').should('be.visible');
  } else {
    // Element does not exist
    throw new Error('Element .link-boxes does not exist');
  }
});
