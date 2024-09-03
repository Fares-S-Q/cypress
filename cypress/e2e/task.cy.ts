import Task4 from './task4'; 

describe('Crypto Prices Tests', () => {
  const task4 = new Task4();

  beforeEach(() => {
    task4.visit();
    cy.wait(5000); 
  });


  it('check colors for percentage change', () => {    // check colors  
    task4.checkColors();
  });


  task4.convertToMillion();            //convert all numbers to million.


  it('check descending sort', () => {       // Check default (descending Order)
    task4.descendingCheck();
  })


  it('check ascending sort', () => {        // check ascending order
    task4.ascendingCheck();
  });

});