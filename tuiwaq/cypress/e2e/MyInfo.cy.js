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

cy.get(':nth-child(6) > .oxd-main-menu-item').click()  //click my info tab
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
cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()
});