describe('Recept', () => {

    const verifyRecipeImage = (imageURL) => {
        cy.get('.rn-16y2uox > .rn-1272l3b')
        .should('have.attr', 'src', imageURL)
    }

    beforeEach(() => {
        cy.visit('/?dev')
    })

    // Kategori: sängkantsmeny

    it('has recipe Smoothie med variation', () => {
        cy.verifyRecipe('sängkantsmeny', 'Smoothie med variation')
        verifyRecipeImage('http://admin.matfrojd.com/images/131.jpg')
        cy.verifyIngredientAndAmount(['Banan', 'Blåbär', 'Florsocker'])
    })

    it('has recipe Mockadrink med banan', () => {
        cy.verifyRecipe('sängkantsmeny', 'Mockadrink med banan')
        verifyRecipeImage('http://admin.matfrojd.com/images/316.jpg')
        cy.verifyIngredientAndAmount(['Banan', 'Snabbkaffepulver'])
    })

    it('has recipe Lassi med ingefära', () => {
        cy.verifyRecipe('sängkantsmeny', 'Lassi med ingefära')
        verifyRecipeImage('http://admin.matfrojd.com/images/341.jpg')
        cy.verifyIngredientAndAmount(['Mjölk', 'Kardemumma', 'Honung', 'Salt', 'Mynta'])
    })

    // Kategori: lunch/Middag 

    it('has recipe Fisk i dillsås', () => {
        cy.verifyRecipe('lunch/Middag', 'Fisk i dillsås')
        verifyRecipeImage('http://admin.matfrojd.com/images/120.jpg')
        cy.verifyIngredientAndAmount(['Vetemjöl', 'Potatis', 'Dill'])
    })

    it('has recipe Fiskgryta', () => {
        cy.verifyRecipe('lunch/Middag', 'Fiskgryta')
        verifyRecipeImage('http://admin.matfrojd.com/images/119.jpg')
        cy.verifyIngredientAndAmount(['matfett', 'Morot', 'Matlagningsgrädde'])
    })

    it.only('has recipe Basilikamarinerad rostbiff med risotto', () => {
        cy.verifyRecipe('lunch/Middag', 'Basilikamarinerad rostbiff med risotto')
        verifyRecipeImage('http://admin.matfrojd.com/images/367.jpg')
        cy.verifyIngredientAndAmount(['matfett', 'Kapris', 'Schalottenlök'])
    })

    // Kategori: resträtter 

    it('has recipe Fiskpudding', () => {
        cy.verifyRecipe('resträtter', 'Fiskpudding')
        verifyRecipeImage('http://admin.matfrojd.com/images/146.jpg')
        cy.verifyIngredientAndAmount(['matfett', 'Ägg', 'Salt'])
    })

    it('has recipe Fattiga riddare', () => {
        cy.verifyRecipe('resträtter', 'Fattiga riddare')
        verifyRecipeImage('http://admin.matfrojd.com/images/282.jpg')
        cy.verifyIngredientAndAmount(['Vetemjöl', 'Mjölk', 'Bröd'])
    })

    it('has recipe Frutti med citruston och bär', () => {
        cy.verifyRecipe('resträtter', 'Frutti med citruston och bär')
        verifyRecipeImage('http://admin.matfrojd.com/images/164.jpg')
        cy.verifyIngredientAndAmount(['Florsocker', 'Gräddfil', 'Vaniljsocker'])
    })
    
})