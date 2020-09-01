describe('Favoriter', () => {

    const backButton = '.rn-1habvwh > .rn-1loqt21 > .rn-11yh6sk > .rn-1272l3b';

    const recipeToggleFavorit = (category, recipe) => {
        cy.verifyRecipe(category, recipe)
        
         // Select Favorites (heart symbol)
        cy
            .get('.rn-1awozwy > :nth-child(1) > :nth-child(1) > .rn-1loqt21 > .rn-61z16t.rn-bnwqim')
            .click()
        
        // Back to start page
        cy.get(backButton).click()
        cy.get(backButton).click()
        cy.get(backButton).click()
    }

    const verifyFavorite = (recipe, imageURL) => {
        // Select Favoriter
        cy
            .contains('Favoriter')
            .click()
    
        // Verify existence of recipe and image on page
        cy
            .contains(recipe)
            .parent()
            .prev()
            .children()
            .children('img')
            .should('have.attr', 'src', imageURL)
    
        //Back to startpage
        cy.get(backButton).click()
     }

    const verifyNotFavorite = (recipe) => {
        //Select Favoriter
        cy
            .contains("Favoriter", { timeout: 10000 })
            .click()

        //Verify recipe not on favorite page
        cy
            .contains(recipe)
            .should('not.exist')
     }

    beforeEach(() => {
        cy.visit('/?dev')
    })

    it('adds recipe to favorites - TT3-7 AC-1', () => {
        //Arrange
        verifyNotFavorite('Ayran')

        //Act
        recipeToggleFavorit('drycker', 'Ayran')

        //Assert
        verifyFavorite('Ayran', 'http://admin.matfrojd.com/images/334.jpg')
    })

    it('removes recipe from favorites - TT3-7 AC-2', () => {
        //Arrange
        recipeToggleFavorit('lunch/Middag', 'Fiskgryta')
        verifyFavorite('Fiskgryta', 'http://admin.matfrojd.com/images/119.jpg')

        //Act
        recipeToggleFavorit('lunch/Middag', 'Fiskgryta')

        //Assert
        verifyNotFavorite('Fiskgryta')
    })

    
    /* TODO or unnecessary?
    it('adds multiple recipes to favorite', () => { 

    }) */

})