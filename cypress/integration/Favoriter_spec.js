describe('Favioriter', () => {

    beforeEach(() => {
        cy.visit('/?dev')
    })

    xit('adds recipes to favorites', () => {
        cy.addRecipeToFavorites('drycker', 'Ayran')
        cy.addRecipeToFavorites('lunch/Middag', 'Fiskgryta')

        cy.verifyFavorite('Fiskgryta', 'http://admin.matfrojd.com/images/119.jpg')
        cy.verifyFavorite('Ayran', 'http://admin.matfrojd.com/images/334.jpg')

        cy.addRecipeToFavorites('resträtter', 'Fattiga riddare')

        cy.verifyFavorite('Fattiga riddare', 'http://admin.matfrojd.com/images/282.jpg')
    })
    
   /*  it('removes recipe from favorites', () => {
        cy.addRecipeToFavorites('drycker', 'Ayran')
        cy.verifyFavorite('Ayran', 'http://admin.matfrojd.com/images/334.jpg')
cy.pause()
        cy.addRecipeToFavorites('drycker', 'Ayran')
        cy.verifyFavorite('Ayran', 'http://admin.matfrojd.com/images/334.jpg')


//toggle favorite!

//

    }) */
})