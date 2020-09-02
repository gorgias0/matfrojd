describe('Handlingslista, TT3-2', () => {

    const backButton = '.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b';

    const createShoppingList = (listName) => {
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
        cy.get(backButton).click()
     }

    const addIngredientsToList = (listName, ingredientsArr) => {
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
        
        // Go back to startpage
        cy.get(backButton).click()
        cy.get(backButton).click()
    
        //Assert startpage (unnecessary?)
        cy
            .get('.rn-fzspga > .rn-13yce4e')
            .should('have.text', 'Matfröjd Start')
    }

    const addCurrentRecipeToNewShoppingList = (listName) => {
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
        cy.get(backButton).click()
        cy.get(backButton).click()
        cy.get(backButton).click()
    
        // Assert that the created list extist, containing at least one item
        cy.contains('Handlingslista').click()
        cy.contains(listName).click()
        cy.contains('Ta bort')
    }
    
    const removeIngredient = (listName, ingridient) => {
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
        cy.get(backButton).click()
        cy.get(backButton).click()
    
        // Assert startpage
        cy
            .get('.rn-fzspga > .rn-13yce4e')
            .should('have.text', 'Matfröjd Start')
    }
    
    const emailShoppingList = (listName) => {
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
    }
    
    const deleteShoppingList = (listName) => {
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
            .get(backButton)
            .click()
    
    }

    beforeEach(() => {
        cy.visit('/?dev')
    })

    it('creates shopping list - T3-2 AC-T1', () => {
       createShoppingList('Test_list')
    })

    it('adds ingredients to shopping list - TT3-2 AC-2', () => {
        createShoppingList('Test_list')
        addIngredientsToList('Test_list', ['Potatis', 'Banan', 'Aprikoser'])
    })

    it('adds recipe ingredients to shopping list - TT3-2 AC-3', () => {
        cy.verifyRecipe('sängkantsmeny', 'Smoothie med variation')
        addCurrentRecipeToNewShoppingList('Recipe_shopping_list')
        cy.verifyIngredientAndAmount(['Banan', 'Yoghurt', 'Florsocker'])
    })

    it('removes ingredients from shopping list - TT3-2 AC-4', () => {
        createShoppingList('Test_list')
        addIngredientsToList('Test_list', ['Potatis', 'Banan', 'Aprikoser'])
        removeIngredient('Test_list', 'Banan')
    })

    it('sends shopping list as email - TT3-2 AC-5', () => {
        createShoppingList('Test_list')
        emailShoppingList('Test_list')
    })

    it('deletes shopping list - TT3-2 AC-6', () => {
        createShoppingList('List1')
        createShoppingList('List2')
        createShoppingList('List3')
        deleteShoppingList('List2')
    })

})