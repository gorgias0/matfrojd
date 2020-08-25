describe('Recept', () => {

    beforeEach(() => {
        cy.visit('/?dev')
    })

    // Kategori: sängkantsmeny

    it('has recipe Smoothie med variation', () => {
        cy.verifyRecipe('sängkantsmeny', 'Smoothie med variation')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/131.jpg')
    })

    it('has recipe Mockadrink med Banan', () => {
        cy.verifyRecipe('sängkantsmeny', 'Mockadrink med banan')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/316.jpg')
        
    })

    it('has recipe Lassi med ingefära', () => {
        cy.verifyRecipe('sängkantsmeny', 'Lassi med ingefära')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/341.jpg')
    })

    // Kategori: lunch/Middag 

    it('has recipe Fisk i dillsås', () => {
        cy.verifyRecipe('lunch/Middag', 'Fisk i dillsås')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/120.jpg')
    })

    it('has recipe Fiskgryta', () => {
        cy.verifyRecipe('lunch/Middag', 'Fiskgryta')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/119.jpg')
    })

    it('has recipe Basilikamarinerad rostbiff med risotto', () => {
        cy.verifyRecipe('lunch/Middag', 'Basilikamarinerad rostbiff med risotto')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/367.jpg')
    })

    // Kategori: resträtter 

    it('has recipe Ost- och skinkpaj', () => {
        cy.verifyRecipe('resträtter', 'Ost- och skinkpaj')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/348.jpg')
    })

    it('has recipe Fiskpudding', () => {
        cy.verifyRecipe('resträtter', 'Fiskpudding')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/146.jpg')
    })

    it('has recipe Frutti med citruston och bär', () => {
        cy.verifyRecipe('resträtter', 'Frutti med citruston och bär')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/164.jpg')
    })
})