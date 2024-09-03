// // Task 1 :
// import { selectors } from "./Strings-var/selectors";
// describe('Amazon to get a product and add it to cart then check my cart if it is tehre or not',() =>{
// it('Amazon search', () => {

//     cy.visit('/');
//     cy.get(selectors.searchBar).type(selectors.productName + '{enter}');
//     cy.get(selectors.firstItem).eq(0).click();
//     cy.get(selectors.addToCart).click();
//     cy.get(selectors.cart).click();
//         // should(have.text or have.value the second one for input we are using value)
//         // also I can use be.checked inside should 
//         // and I can use check() and unckeck() do turn the checkbox status
//         // also inside should I can use ('contains.text', 'sssss')
// })
// })




// Task 2 :
// describe('Check Lipsum text without visiting', () => {
//     it('should check H1 tag element', () => {
//         cy.request('https://www.lipsum.com/').its('body').should('include', '<h1>Lorem Ipsum</h1>')
    
//     });
// });



// describe('Stub API Call and Modify Data', () => {
//     beforeEach(() => {
//       // Intercept the API call and provide a stubbed response
//       cy.intercept('GET', 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', {
//         statusCode: 200,
//         body: {
//           "squadName": "Super Hero Squad",
//           "homeTown": "Metro City",
//           "formed": 2016,
//           "secretBase": "Super tower",
//           "active": true,
//           "members": [
//             {
//               "name": "Fares",
//               "age": 21,
//               "secretIdentity": "Dan Jukes",
//               "powers": [
//                 "Radiation resistance",
//                 "Turning tiny",
//                 "Radiation blast"
//               ]
//             }
//           ]
//         }
//       }).as('getHeroes');
//     });
  
//     it('should load the page with the stubbed hero data', () => {
//       cy.visit('https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html');
//       cy.wait('@getHeroes');
      
//       // Assertions to verify the presence of the stubbed hero data
//       cy.contains('Fares').should('be.visible');
//       cy.contains('Dan Jukes').should('be.visible');
//       cy.contains('21').should('be.visible');
//       cy.contains('Radiation resistance').should('be.visible');
//       cy.contains('Turning tiny').should('be.visible');
//       cy.contains('Radiation blast').should('be.visible');
//     });
//   });
