it.only('Visit Login',function(){
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.wait(2000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
cy.wait(2000);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
cy.wait(2000);
cy.get('.oxd-button').click();
cy.wait(4000);
cy.get(':nth-child(1) > .oxd-main-menu-item').click();
cy.wait(2000);
cy.get('.orangehrm-header-container > .oxd-button').click();
cy.wait(2000);
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
cy.wait(2000);
cy.get('.oxd-select-dropdown > :nth-child(2)').click();
cy.wait(2000);
//cy.get('.oxd-autocomplete-text-input > input').click();
cy.get('.oxd-autocomplete-text-input > input').type("a");
cy.wait(2000);
cy.get('.oxd-autocomplete-dropdown > :nth-child(2)').click();
cy.wait(2000);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
cy.wait(2000);
cy.get('.oxd-select-dropdown > :nth-child(2)').click();
cy.wait(2000);
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("hayaa91");
cy.wait(2000);
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("hhTToo@60");
cy.wait(2000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("hhTToo@60");
cy.wait(2000);
cy.get('.oxd-button--secondary').click();
cy.wait(5000);
const usernameToDelete = 'hayaa91';
// Find the row that contains 'username' and click its delete icon
cy.get('.oxd-table-body') // this is the container for rows
  .contains('div', usernameToDelete) // find the cell with the username
  .parents('.oxd-table-row') // go up to the row element
  .within(() => {
    cy.get('.oxd-icon.bi-trash').click(); // Adjust selector if needed

  });

// Confirm deletion
cy.get('.oxd-button--label-danger').click();

/*

cy.get(':nth-child(2) > .oxd-input').type("hayaa91");

cy.wait(5000);

cy.get('.oxd-form-actions > .oxd-button--secondary').click();

cy.wait(3000);

cy.get('.oxd-table-cell-actions > :nth-child(1)').click();

cy.wait(3000);

cy.get('.oxd-button--label-danger').click();

*/

});

