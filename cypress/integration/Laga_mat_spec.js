describe('Laga mat, TT3-6', () => {

    const cookRecipe = (category, recipe) => {
        cy.verifyRecipe(category, recipe)
         
         // Select Laga mat
        cy
            .contains('Laga mat')
            .click()
        
            // Check all the cooking step checkboxes    
        cy
            .get('.rn-1x0uki6 > :nth-child(2) > :nth-child(1) > :nth-child(1) > .rn-1awozwy')
            .parent()
            .parent()
            .click( { multiple: true} )
            .nextAll()
            .click({ multiple: true })
        
        // Assert greeting
        cy  
            .contains('Smaklig måltid')
    
        //back to startpage?? why?
    }

    beforeEach(() =>  {
        cy.visit('/?dev')
    })

    it('cooks Kardemummakryddad mjölkdrink', () => {
        cookRecipe('sängkantsmeny', 'Kardemummakryddad mjölkdrink')
    })

    it('cooks Fisk i dillsås', () => {
        cookRecipe('lunch/Middag', 'Fisk i dillsås')
    })

    it('cooks Inlagd pressgurka', () => {
        cookRecipe('drycker', 'Varm äppeldryck')
    })

    it('cooks Fruktkompott', () => {
        cookRecipe('efterrätter', 'Fruktkompott')
    })

/*
    it('', () => {
        cy.cookRecipe('', '')
    })

    it('', () => {
        cy.cookRecipe('', '')
    })

     it('', () => {
        cy.cookRecipe('', '')
    })

*/

})
