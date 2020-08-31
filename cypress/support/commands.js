Cypress.Commands.add('verifyRecipe', (category, recipe) => {
    //Navigate to page /categories 
    cy
        .contains('Recept', { timeout: 10000 })
        .click()
    
    // Assert landing page
    cy
        .url()
        .should('include', 'categories')
    
    // Select {category}
    cy
        .contains(category)
        .click()

    // Assert {category} page
    cy
        .get('.rn-fzspga > .rn-13yce4e')
        .should('have.text', category)

    // Select {recipie}
    cy
        .contains(recipe)
        .click()

    // Assert {recipe} page
    cy
        .get('.rn-fzspga > .rn-13yce4e')
        .should('have.text', recipe)    
})

/**
  * Skakig metod när den används på Recept-sidan eftersom den failar 
  * om någon ingrediens heter samma sak som (del av) receptnamnet. 
  * Case-sensitive, dvs: 
  * 'Banan' i receptnamn och 'Banan' som ingrediens = fail
  * 'Banan' och 'banan' = pass
  */
Cypress.Commands.add('verifyIngredientAndAmount', (textArr) => {
    textArr.forEach(ingredient => 
        cy.contains(ingredient)
        .next()
        .should(($div) => {
            let amount = $div.text()
            expect(amount).to.have.length.of.at.least(1)
        })
    );
})
