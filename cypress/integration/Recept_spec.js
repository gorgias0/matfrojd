describe('Recept', () => {

    beforeEach(() => {
        cy.visit('/?dev')
    })

    // Kategori: sängkantsmeny

    it('has recipe Smoothie med variation', () => {
        cy.verifyRecipe('sängkantsmeny', 'Smoothie med variation')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/131.jpg')
        cy.verifyTextOnPage(['Banan', 'Blåbär', 'Florsocker'])
    })

    it('has recipe Mockadrink med Banan', () => {
        cy.verifyRecipe('sängkantsmeny', 'Mockadrink med banan')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/316.jpg')
        cy.verifyTextOnPage(['Banan', 'Strösocker', 'Snabbkaffepulver'])
    })

    it('has recipe Lassi med ingefära', () => {
        cy.verifyRecipe('sängkantsmeny', 'Lassi med ingefära')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/341.jpg')
        cy.verifyTextOnPage(['Mjölk', 'Honung', 'Mynta'])
    })

    // Kategori: lunch/Middag 

    it('has recipe Fisk i dillsås', () => {
        cy.verifyRecipe('lunch/Middag', 'Fisk i dillsås')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/120.jpg')
        cy.verifyTextOnPage(['Vetemjöl', 'Potatis', 'Dill'])
    })

    it('has recipe Fiskgryta', () => {
        cy.verifyRecipe('lunch/Middag', 'Fiskgryta')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/119.jpg')
        cy.verifyTextOnPage(['matfett', 'Morot', 'Matlagningsgrädde'])
    })

    it('has recipe Basilikamarinerad rostbiff med risotto', () => {
        cy.verifyRecipe('lunch/Middag', 'Basilikamarinerad rostbiff med risotto')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/367.jpg')
        cy.verifyTextOnPage(['matfett', 'Kapris', 'Basilika'])
    })

    // Kategori: resträtter 

    it('has recipe Ost- och skinkpaj', () => {
        cy.verifyRecipe('resträtter', 'Ost- och skinkpaj')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/348.jpg')
        cy.verifyTextOnPage(['Purjolök', 'Mjölk', 'Rökt kött'])
    })

    it('has recipe Fiskpudding', () => {
        cy.verifyRecipe('resträtter', 'Fiskpudding')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/146.jpg')
        cy.verifyTextOnPage(['matfett', 'Ägg', 'Fisk'])
    })

    it('has recipe Frutti med citruston och bär', () => {
        cy.verifyRecipe('resträtter', 'Frutti med citruston och bär')
        cy.verifyImageOnRecipePage('http://admin.matfrojd.com/images/164.jpg')
        cy.verifyTextOnPage(['Florsocker', 'Gräddfil', 'gröt'])
    })
})