describe('Handlingslista', () => {

    beforeEach(() => {
        cy.visit('/?dev')
    })

    it('creates shopping list - TT3-2 AC-1', () => {
       cy.createShoppingList('Test_list')
    })

    it('adds ingredienses to shopping list - TT3-2 AC-2', () => {
        cy.createShoppingList('Test_list')
        cy.addIngredientsToList('Test_list', ['Potatis', 'Banan', 'Aprikoser'])
    })

    it.only('adds recipe ingredients to shopping list - TT3-2 AC-3', () => {
        cy.verifyRecipe('sängkantsmeny', 'Smoothie med variation')
        cy.addCurrentRecipeToNewShoppingList('Recipe_shopping_list')
        cy.verifyTextOnPage(['Banan', 'Yoghurt', 'Florsocker'])
    })

    it('removes ingredintses from shopping list - TT3-2 AC-4', () => {
        cy.createShoppingList('Test_list')
        cy.addIngredientsToList('Test_list', ['Potatis', 'Banan', 'Aprikoser'])
        cy.removeIngredient('Test_list', 'Banan')
    })

        //Todo or not todo, thats the question
    xit('sends shopping list as email - TT3-2 AC-5', () => {
        //kanske bara kolla om denna existerar:
        //img src="./static/media/share.f5fa6948.png"
        //should.exist - should.not.be.disabled - should.be.visable...???
    })

    it('deletes shopping list - TT3-2 AC-6', () => {
        cy.createShoppingList('List1')
        cy.createShoppingList('List2')
        cy.createShoppingList('List3')
        cy.deleteShoppingList('List2')
    })

    
})