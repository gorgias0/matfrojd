describe('Recept', () => {

    beforeEach(() => {
        cy.visit('/?dev')
    })

    // Kategori: sängkantsmeny

    it('has recipe Smoothie med variation', () => {
        cy.verifyRecipe('sängkantsmeny', 'Smoothie med variation')
        cy.verifyRecipeImage('http://admin.matfrojd.com/images/131.jpg')
        cy.verifyIngredientAndAmount(['Banan', 'Blåbär', 'Florsocker'])
    })

    it('has recipe Mockadrink med banan', () => {
        cy.verifyRecipe('sängkantsmeny', 'Mockadrink med banan')
        cy.verifyRecipeImage('http://admin.matfrojd.com/images/316.jpg')
        cy.verifyIngredientAndAmount(['Banan', 'Snabbkaffepulver'])
    })

    it('has recipe Lassi med ingefära', () => {
        cy.verifyRecipe('sängkantsmeny', 'Lassi med ingefära')
        cy.verifyRecipeImage('http://admin.matfrojd.com/images/341.jpg')
        cy.verifyIngredientAndAmount(['Mjölk', 'Kardemumma', 'Honung', 'Salt', 'Mynta'])
    })

    // Kategori: lunch/Middag 

    it('has recipe Fisk i dillsås', () => {
        cy.verifyRecipe('lunch/Middag', 'Fisk i dillsås')
        cy.verifyRecipeImage('http://admin.matfrojd.com/images/120.jpg')
        cy.verifyIngredientAndAmount(['Vetemjöl', 'Potatis', 'Dill'])
    })

    it('has recipe Fiskgryta', () => {
        cy.verifyRecipe('lunch/Middag', 'Fiskgryta')
        cy.verifyRecipeImage('http://admin.matfrojd.com/images/119.jpg')
        cy.verifyIngredientAndAmount(['matfett', 'Morot', 'Matlagningsgrädde'])
    })

    it('has recipe Basilikamarinerad rostbiff med risotto', () => {
        cy.verifyRecipe('lunch/Middag', 'Basilikamarinerad rostbiff med risotto')
        cy.verifyRecipeImage('http://admin.matfrojd.com/images/367.jpg')
        cy.verifyIngredientAndAmount(['matfett', 'Kapris', 'Schalottenlök'])
    })

    // Kategori: resträtter 

    it('has recipe Fiskpudding', () => {
        cy.verifyRecipe('resträtter', 'Fiskpudding')
        cy.verifyRecipeImage('http://admin.matfrojd.com/images/146.jpg')
        cy.verifyIngredientAndAmount(['matfett', 'Ägg', 'Salt'])
    })

    it('has recipe Fattiga riddare', () => {
        cy.verifyRecipe('resträtter', 'Fattiga riddare')
        cy.verifyRecipeImage('http://admin.matfrojd.com/images/282.jpg')
        cy.verifyIngredientAndAmount(['Vetemjöl', 'Mjölk', 'Bröd'])
    })

    it('has recipe Frutti med citruston och bär', () => {
        cy.verifyRecipe('resträtter', 'Frutti med citruston och bär')
        cy.verifyRecipeImage('http://admin.matfrojd.com/images/164.jpg')
        cy.verifyIngredientAndAmount(['Florsocker', 'Gräddfil', 'Vaniljsocker'])
    })
    
})