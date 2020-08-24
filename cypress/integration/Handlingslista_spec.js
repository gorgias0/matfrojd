describe('Handlingslista', () => {

    beforeEach(() => {
        cy.visit('/?dev')
    })

    it('creates list - TT3-2 AC-1', () => {
       cy.createShoppingList('Test_list')
    })

    it('adds ingredienses to List - TT3-2 AC-2', () => {
        cy.createShoppingList('Test_list')
        cy.addIngredientsToList('Test_list', ['Potatis', 'Banan', 'Aprikoser'])
    })

        //Todo or not to do, thats the question
    xit('adds recipe ingredients to list - TT3-2 AC-3', () => {
    })

    it('removes ingredintses from list - TT3-2 AC-4', () => {
        cy.createShoppingList('Test_list')
        cy.addIngredientsToList('Test_list', ['Potatis', 'Banan', 'Aprikoser'])
        cy.removeIngredient('Test_list', 'Banan')
    })

        //Todo or not to do, thats the question
    xit('sends list as email - TT3-2 AC-5', () => {
    })

    it('deletes list - TT3-2 AC-6', () => {
        cy.createShoppingList('List1')
        cy.createShoppingList('List2')
        cy.createShoppingList('List3')
        cy.deleteShoppingList('List2')
    })

    
})