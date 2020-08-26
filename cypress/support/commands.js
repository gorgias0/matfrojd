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

/*
*************************************************************************************************
 */

Cypress.Commands.add('createShoppingList', (listName) => {
    //Navigate to page /shopping_list 
    cy
        .contains('Handlingslista', { timeout: 10000 })
        .click()

    // Assert landing page
    cy
        .url()
        .should('include', 'shopping_list')

    //Select plus sign to create new list
    cy
        .get('.rn-1awozwy > .rn-11yh6sk > .rn-1272l3b')
        .click({force:true})

    //Assert Ny handlingslista page
    cy
        .get('.rn-18u37iz > .rn-homxoj')
        .should('have.text', 'Ny handlingslista')

    // Name new list {listName}, click Skapa
    cy
        .get('.rn-97bpaa')
        .type(listName)
    cy  
        .contains('Skapa')
        .click()

    // Assert the newly created List
    cy
        .contains(listName)
        .should('exist')

    //Go back to start page
    cy
        .get('.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b')
        .click() 
 })


/*
*************************************************************************************************
 */

Cypress.Commands.add('addIngredientsToList', (listName, ingredientsArr) => {
    // Navigate to /shopping_list 
    cy  
        .contains('Handlingslista', { timeout: 10000 })
        .click()

    // Select list {listName}
    cy
        .contains(listName)
        .click()
    
    //Assert
        //maybe

    // Select plus sign to add ingredienses
    cy
        .get('.rn-1lxl8vk > .rn-1awozwy')
        .click()

    //Assert
        //maybe

    // Select each ingridient in the array
    ingredientsArr.forEach(ingredient => {
        cy.contains(ingredient)
        .click()
    });
   
    // Select Klar
    cy
        .contains('Klar')
        .click()

    // Assert all ingredients in the array
    ingredientsArr.forEach(ingredient => {
        cy.contains(ingredient)
        .click()
    });
    
    // Go back to startpage (2 clicks on back button)
    cy
    .get('.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b').click() 
    .get('.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b').click() 

    //Assert startpage
    cy
        .get('.rn-fzspga > .rn-13yce4e')
        .should('have.text', 'Matfröjd Start')
})

/*
*************************************************************************************************
 */

Cypress.Commands.add('addCurrentRecipeToNewShoppingList', (listName) => {
    // Select shopping cart
    cy
        .get(':nth-child(2) > :nth-child(1) > .rn-11yh6sk > .rn-1272l3b')
        .click()
    
    // Select Lägg till
    cy
        .get('.rn-16y2uox > .rn-4xf99a > .rn-13yce4e')
        .click()

    // Name new list {listName}
    cy
        .get('.rn-97bpaa')
        .type(listName)

    // Select Skapa   ---  (skakig?... hur använda contains på andra 'Skaka'-förekomsten?) 
    cy
        .get('.rn-14lw9ot > :nth-child(2) > .rn-1awozwy > .rn-13yce4e')
        .click()

    //Go back to start page
    cy
    .get('.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b').click() 
    .get('.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b').click() 
    .get('.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b').click() 

    // Assert that the created list extist, containing at least one item
    cy.contains('Handlingslista').click()
    cy.contains(listName).click()
    cy.contains('Ta bort')
})

/*
*************************************************************************************************
 */

Cypress.Commands.add('removeIngredient', (listName, ingridient) => {
    // Navigate to /shopping_list 
    cy  
        .contains('Handlingslista', { timeout: 10000 })
        .click()

    // Select list {listName}
    cy
        .contains(listName)
        .click()

    // Select {ingridient}
    cy  
        .contains(ingridient)
        .click()

    // DOM navigation in order to select 'Ta bort' on this specific ingridient
    cy
        .contains(ingridient)
        .next()
        .next()
        //.children() // onödig?
        .should('have.text', 'Ta bort')
        .click()

    // Assert remove
    cy
        .contains(ingridient)
        .should('not.exist')

    // Go back to startpage (2 clicks on back button)
    cy
        .get('.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b').click() 
        .get('.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b').click() 

    // Assert startpage
    cy
        .get('.rn-fzspga > .rn-13yce4e')
        .should('have.text', 'Matfröjd Start')
})

/*
*************************************************************************************************
 */

Cypress.Commands.add('emailShoppingList', (listName) => {
    // Navigate to /shopping_list
    cy
        .contains('Handlingslista')
        .click()

    // Select list {listName}
    cy
        .contains(listName)
        .click()

    // Assert email button
    cy
        .get('.rn-1loqt21 > :nth-child(1) > .rn-1g7fiml > .rn-1272l3b')
        .should('exist')
        //.and('be.visible') <--- nope 
        .and('not.be.disabled') //gör vad?
        .and('have.attr', 'src', './static/media/share.f5fa6948.png')
})

/*
*************************************************************************************************
 */

Cypress.Commands.add('deleteShoppingList', (listName) => {
    //Navigate to /shopping_list 
    cy
        .contains('Handlingslista', { timeout: 10000 })
        .click()

    // DOM navigation in order to select 'Ta bort' on this specific list
    cy
        .contains(listName)
        .parent()
        .next()
        .children() // onödig?
        .should('have.text', 'Ta bort')
        .click()

    // Assert delete
    cy
        .contains(listName)
        .should('not.exist')

    //Go back to start page
    cy
        .get('.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b')
        .click() 
}) 

/*
*************************************************************************************************
*************************************************************************************************
*************************************************************************************************
 */

Cypress.Commands.add('verifyImageOnRecipePage', (imageURL) => {
    cy.get('.rn-16y2uox > .rn-1272l3b')
    .should('have.attr', 'src', imageURL)
})


Cypress.Commands.add('verifyIngredientAndAmount', (textArr) => {
    textArr.forEach(text => cy.contains(text).next().should(($div) => {
        const text = $div.text()
        expect(text).to.have.length.of.at.least(1)
    }));
})

/* Cypress.Commands.add('verifyTextOnPage', (textArr) => {
    textArr.forEach(text => cy.contains(text))   
}) */

