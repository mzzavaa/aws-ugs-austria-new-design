/**
 * Visual regression tests for AWS User Groups Austria website
 * 
 * This file contains tests to ensure UI components maintain consistent styling
 * Run with: npm test
 */

// Button consistency tests
describe('Button Styling Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Primary buttons should have consistent height and styling', () => {
    cy.get('.reinvent-button').should(($buttons) => {
      // Check all buttons have same height
      const heights = $buttons.map((i, el) => $(el).outerHeight()).get();
      const uniqueHeights = [...new Set(heights)];
      expect(uniqueHeights.length).to.equal(1);
      
      // Check all buttons have same padding
      const paddings = $buttons.map((i, el) => {
        const style = window.getComputedStyle(el);
        return `${style.paddingTop} ${style.paddingRight} ${style.paddingBottom} ${style.paddingLeft}`;
      }).get();
      const uniquePaddings = [...new Set(paddings)];
      expect(uniquePaddings.length).to.equal(1);
    });
  });

  it('Secondary buttons should have consistent height and styling', () => {
    cy.get('.reinvent-button-secondary').should(($buttons) => {
      // Check all buttons have same height
      const heights = $buttons.map((i, el) => $(el).outerHeight()).get();
      const uniqueHeights = [...new Set(heights)];
      expect(uniqueHeights.length).to.equal(1);
      
      // Check all buttons have same padding
      const paddings = $buttons.map((i, el) => {
        const style = window.getComputedStyle(el);
        return `${style.paddingTop} ${style.paddingRight} ${style.paddingBottom} ${style.paddingLeft}`;
      }).get();
      const uniquePaddings = [...new Set(paddings)];
      expect(uniquePaddings.length).to.equal(1);
    });
  });

  it('Primary and secondary buttons in the same row should have the same height', () => {
    cy.get('.flex.justify-center.gap-4 .reinvent-button, .flex.justify-center.gap-4 .reinvent-button-secondary').should(($buttons) => {
      const heights = $buttons.map((i, el) => $(el).outerHeight()).get();
      const uniqueHeights = [...new Set(heights)];
      expect(uniqueHeights.length).to.equal(1);
    });
  });
});

// Card layout tests
describe('Card Layout Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('User group cards should be displayed in a row on desktop', () => {
    cy.viewport(1200, 800);
    cy.get('.grid.grid-cols-1.md\\:grid-cols-3').should(($grid) => {
      const gridComputedStyle = window.getComputedStyle($grid[0]);
      expect(gridComputedStyle.getPropertyValue('grid-template-columns')).to.include('repeat(3');
    });
  });

  it('User group cards should have equal heights', () => {
    cy.viewport(1200, 800);
    cy.get('.grid.grid-cols-1.md\\:grid-cols-3 > .reinvent-card').should(($cards) => {
      const heights = $cards.map((i, el) => $(el).outerHeight()).get();
      const uniqueHeights = [...new Set(heights)];
      expect(uniqueHeights.length).to.equal(1);
    });
  });

  it('Cards should have consistent padding', () => {
    cy.get('.reinvent-card').should(($cards) => {
      const paddings = $cards.map((i, el) => {
        const style = window.getComputedStyle(el);
        return style.padding;
      }).get();
      
      // Filter out cards with special header sections
      const standardCards = paddings.filter(p => p === paddings[0]);
      expect(standardCards.length).to.be.at.least(3);
    });
  });
});

// Image sizing tests
describe('Image Sizing Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('User group card images should have consistent size', () => {
    cy.get('.grid.grid-cols-1.md\\:grid-cols-3 img').should(($images) => {
      const widths = $images.map((i, el) => $(el).width()).get();
      const heights = $images.map((i, el) => $(el).height()).get();
      
      const uniqueWidths = [...new Set(widths)];
      const uniqueHeights = [...new Set(heights)];
      
      expect(uniqueWidths.length).to.equal(1);
      expect(uniqueHeights.length).to.equal(1);
    });
  });

  it('Header and footer logos should be properly sized', () => {
    cy.get('header img').first().should(($img) => {
      expect($img.height()).to.equal(24); // 6 * 4 (rem to px)
    });
    
    cy.get('footer img').first().should(($img) => {
      expect($img.height()).to.equal(24); // 6 * 4 (rem to px)
    });
  });
});

// Responsive layout tests
describe('Responsive Layout Tests', () => {
  it('Should stack cards on mobile', () => {
    cy.viewport(375, 667); // iPhone SE
    cy.visit('/');
    cy.get('.grid.grid-cols-1.md\\:grid-cols-3').should(($grid) => {
      const gridComputedStyle = window.getComputedStyle($grid[0]);
      expect(gridComputedStyle.getPropertyValue('grid-template-columns')).to.not.include('repeat(3');
    });
  });

  it('Should show cards in a row on desktop', () => {
    cy.viewport(1200, 800);
    cy.visit('/');
    cy.get('.grid.grid-cols-1.md\\:grid-cols-3').should(($grid) => {
      const gridComputedStyle = window.getComputedStyle($grid[0]);
      expect(gridComputedStyle.getPropertyValue('grid-template-columns')).to.include('repeat(3');
    });
  });
});
