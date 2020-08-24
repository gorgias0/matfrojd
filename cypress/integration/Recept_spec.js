describe('Recept', () => {

    beforeEach(() => {
        cy.visit('/?dev')
    })

    // Kategori: sängkantsmeny

    it('has recipe Smoothie med variation', () => {
        cy.verifyRecipe('sängkantsmeny', 'Smoothie med variation')
    })

    it('has recipe Mockadrink med Banan', () => {
        cy.verifyRecipe('sängkantsmeny', 'Mockadrink med banan')
    })

    it('has recipe Tunnbrödsrulle med morot och mjukost', () => {
        cy.verifyRecipe('sängkantsmeny', 'Tunnbrödsrulle med morot och mjukost')
    })

    // Kategori: lunch/Middag 

    it('has recipe Fisk i dillsås', () => {
        cy.verifyRecipe('lunch/Middag', 'Fisk i dillsås')
    })

    it('has recipe Korv Stroganoff', () => {
        cy.verifyRecipe('lunch/Middag', 'Korv Stroganoff')
    })

    it('has recipe Basilikamarinerad rostbiff med risotto', () => {
        cy.verifyRecipe('lunch/Middag', 'Basilikamarinerad rostbiff med risotto')
    })

    // Kategori: resträtter 

    it('has recipe Ost- och skinkpaj', () => {
        cy.verifyRecipe('resträtter', 'Ost- och skinkpaj')
    })

    it('has recipe Fiskpudding', () => {
        cy.verifyRecipe('resträtter', 'Fiskpudding')
    })

    it('has recipe Frutti med citruston och bär', () => {
        cy.verifyRecipe('resträtter', 'Frutti med citruston och bär')
    })
})