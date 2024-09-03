class Task4 {
  private sortByMarketCapbutton = '[data-test="Market Cap"]';
  private percentageChangeSelector = '[data-test="row-cell-1H"] > [class*=TableCellChange_tableCellChangeNegative]';
  private marketCapVal = '[data-test="row0"] > [data-test="row-cell-Market Cap"]';
  
  public visit() {
    cy.visit('https://www.forbes.com/digital-assets/crypto-prices/');
  }
    public getPercentageChange() {
    return cy.get(this.percentageChangeSelector);
  }

  public sortByMarketCapAscending(): void {
    cy.get(this.sortByMarketCapbutton).click();
  }

  public getval(){
    return cy.get(this.marketCapVal);
  }

  public checkColors(){
      this.getPercentageChange().each(($element) => {
      const text = $element.text().trim();
      const color = $element.css('color');

      if (text.includes('%')) {
        const value = parseFloat(text.replace('%', '').trim());

        if (value > 0) {
          expect(color).to.eq('rgb(0, 153, 51)'); // green color
        } else if (value < 0) {
          expect(color).to.eq('rgb(220, 0, 0)'); // red color
        } else if (value == 0) {
          expect(color).to.eq('rgb(51, 51, 51)'); // black 
        }
      } else {
        //  not contain a percentage sign
        cy.log('Text does not contain a percentage sign');
      }
    });
  }

  public descendingCheck(){
    this.getval().then($values => {
      const initialValues = $values.toArray().map(el => parseFloat(el.innerText.replace(/[^0-9.]/g, '')));

      const isDescending = initialValues.every((val, i, arr) => !i || arr[i - 1] >= val);
      expect(isDescending).to.be.true;
    });
  }

  public ascendingCheck(){
    // change order
    this.sortByMarketCapAscending();

    // values after sorting
    this.getval().then($values => {
      const sortedValues = $values.toArray().map(el => parseFloat(el.innerText.replace(/[^0-9.]/g, '')));

    // is ascending order
    const isAscending = sortedValues.every((val, i, arr) => !i || arr[i - 1] <= val);
      expect(isAscending).to.be.true;
    });
  }

  public convertToMillion(){

  const convertToMillions = (text: string): number => {
  const value = parseFloat(text.replace(/[^0-9.]/g, ''));
  if (text.includes('T')) {
    return value * 1_000_000;         // Trillion 
  } else if (text.includes('B')) {
    return value * 1_000;            // Billion 
  } else if (text.includes('M')) {
    return value;                   // Already in millions
  } else if (text.includes('K')) {
    return value / 1_000;          // Thousand 
  } else {
    return value * 0;             // in millions
  }
};

  }
}

export default Task4;
