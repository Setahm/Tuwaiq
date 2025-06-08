it.only('Visit Login',function(){
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.wait(3000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
cy.wait(3000);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
cy.wait(3000);
cy.get('.oxd-button').click();
cy.wait(3000);
//login
cy.get(':nth-child(1) > .oxd-main-menu-item').click();


cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click();
cy.wait(3000);
cy.get('.oxd-dropdown-menu > :nth-child(1)').click();
cy.wait(3000);
cy.get('.oxd-button').click();

cy.get(':nth-child(2) > .oxd-input').type("job job", {delay:200});
cy.wait(3000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("job job job job", {delay:200});
cy.wait(3000);
cy.get('[type ="file"]').selectFile('cypress/fixtures/SETAH-MISHAL-ALBEAIJI-FlowCV-Resume-20240604 (2) (1) (1) (1).pdf',{force:true});

cy.wait(3000);
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("job job jobjobjob job job", {delay:200});
cy.wait(3000);
cy.get('.oxd-button--secondary').click();
cy.wait(3000);

//delete
const jobb = 'job job';

// Find the row that contains 'username' and click its delete icon
cy.get('.oxd-table-body') // this is the container for rows
  .contains('div', jobb) // find the cell with the username
  .parents('.oxd-table-row') // go up to the row element
  .within(() => {
    cy.get('.oxd-icon.bi-trash').click(); // Adjust selector if needed
  });
  // Confirm deletion
cy.get('.oxd-button--label-danger').click();

});


