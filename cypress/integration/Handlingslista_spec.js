describe('Handlingslista', () => {

    beforeEach(() => {
        cy.visit('/?dev')
        cy.pause()
    })

    it('creates shopping list - TT3-2 AC-1', () => {
       cy.createShoppingList('Test_list')
    })

    it('adds ingredients to shopping list - TT3-2 AC-2', () => {
        cy.createShoppingList('Test_list')
        cy.addIngredientsToList('Test_list', ['Potatis', 'Banan', 'Aprikoser'])
    })

    it('adds recipe ingredients to shopping list - TT3-2 AC-3', () => {
        cy.verifyRecipe('sängkantsmeny', 'Smoothie med variation')
        cy.addCurrentRecipeToNewShoppingList('Recipe_shopping_list')
        cy.verifyIngredientAndAmount(['Banan', 'Yoghurt', 'Florsocker'])
    })

    it('removes ingredients from shopping list - TT3-2 AC-4', () => {
        cy.createShoppingList('Test_list')
        cy.addIngredientsToList('Test_list', ['Potatis', 'Banan', 'Aprikoser'])
        cy.removeIngredient('Test_list', 'Banan')
    })

    it('sends shopping list as email - TT3-2 AC-5', () => {
        cy.createShoppingList('Test_list')
        cy.emailShoppingList('Test_list')
    })

    it('deletes shopping list - TT3-2 AC-6', () => {
        cy.createShoppingList('List1')
        cy.createShoppingList('List2')
        cy.createShoppingList('List3')
        cy.deleteShoppingList('List2')
    })

})