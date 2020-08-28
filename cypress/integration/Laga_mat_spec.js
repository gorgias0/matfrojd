describe('Laga mat', () => {


    beforeEach(() =>  {
        cy.visit('/?dev')
    })

    it('cooks Kardemummakryddad mjölkdrink', () => {
        cy.cookRecipe('sängkantsmeny', 'Kardemummakryddad mjölkdrink')
    })

    it('cooks Fisk i dillsås', () => {
        cy.cookRecipe('lunch/Middag', 'Fisk i dillsås')
    })

    it('cooks Inlagd pressgurka', () => {
        cy.cookRecipe('aptitretare', 'Inlagd pressgurka')
    })

    it.only('cooks Fruktkompott', () => {
        cy.cookRecipe('efterrätter', 'Fruktkompott')
    })

/*
    it('', () => {
        cy.cookRecipe('', '')
    })

    it('', () => {
        cy.cookRecipe('', '')
    })

    it('', () => {
        cy.cookRecipe('', '')
    }) */

})
