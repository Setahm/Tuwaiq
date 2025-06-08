import { before } from "mocha";

before('Visit Login',function(){
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.wait(3000);
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
  cy.wait(3000);
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
  cy.wait(3000);
  cy.get('.oxd-button').click();
  cy.wait(3000);
  cy.get('.oxd-userdropdown-tab').click();
  cy.wait(3000);
  cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
  //VisitLogin
});

it('LogOut',function(){
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
  cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("setah77");
  cy.wait(2000);
  cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("SSmmoo@60");
  cy.wait(2000);
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("SSmmoo@60");
  cy.wait(2000);
  cy.get('.oxd-button--secondary').click();
  cy.wait(5000);
  const usernameToDelete = 'setah77';
  // Find the row that contains 'username' and click its delete icon
  cy.get('.oxd-table-body') // this is the container for rows
    .contains('div', usernameToDelete) // find the cell with the username
    .parents('.oxd-table-row') // go up to the row element
    .within(() => {
      cy.get('.oxd-icon.bi-trash').click(); // Adjust selector if needed
      // Confirm deletion
      cy.get('.oxd-button--label-danger').click();
    });
  //LogOut
}); // Corrected closing brace for 'LogOut' test

it('Jobs',function(){
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
      // Confirm deletion
      cy.get('.oxd-button--label-danger').click();
    });
  //Jobs
}); // Corrected closing brace for 'Jobs' test

it('MyInfo',function(){
  cy.get(':nth-child(6) > .oxd-main-menu-item').click()  //click my info tab
  cy.wait(3000);
  cy.get('.orangehrm-edit-employee-image > .employee-image').click() //click photo
  cy.wait(3000);
  cy.get('.oxd-file-div > .oxd-icon-button').click();
  cy.wait(3000);
  cy.get('[type="file"]').selectFile('cypress/fixtures/images.jpg', { force: true });
  cy.wait(3000);
  cy.get('.oxd-button').click() //save photo
  cy.wait(3000);
  //date
  cy.get(':nth-child(1) > .orangehrm-tabs-item').click();
  cy.wait(3000);
  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click();
  cy.wait(3000);
  cy.get(':nth-child(11) > .oxd-calendar-date').click();
  cy.wait(3000);
  cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click();
});