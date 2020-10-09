module.exports = function toReadable (number) {
    let unitsAndSimpleDozens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    let thousand = 'thousand';
    let million = 'million';
    let billion = 'billion';
    
    let arrayFromNumber = number.toString().split('');
    
    let readableNumber = '';
    
    if (number>=0 && number <=19) {
        readableNumber = unitsAndSimpleDozens[number];
        return readableNumber;
    }
    
    if (number>=20&& number<=99) {
        readableNumber = dozens[arrayFromNumber[0]-2] + ' ' + 
        unitsAndSimpleDozens[arrayFromNumber[1]];
      if(arrayFromNumber[1]==0) readableNumber = dozens[arrayFromNumber[0]-2];
        return readableNumber;
    }
      
      if (number>=100&& number<=999 && arrayFromNumber[1]==0) {
        readableNumber = unitsAndSimpleDozens[arrayFromNumber[0]] + ' ' + hundred + ' ' +
        unitsAndSimpleDozens[arrayFromNumber[2]];
        if(arrayFromNumber[2]==0) readableNumber = unitsAndSimpleDozens[arrayFromNumber[0]] + ' ' + hundred;
        
        return readableNumber;
    }
      
      if (number>=100&& number<=999 && arrayFromNumber[2]==0 && (arrayFromNumber[1]+arrayFromNumber[2])>=20) {
        readableNumber = unitsAndSimpleDozens[arrayFromNumber[0]] + ' ' + hundred + ' ' +
        dozens[arrayFromNumber[1]-2];
        return readableNumber;
    }
      
      if (number>=100&& number<=999 && (arrayFromNumber[1]+arrayFromNumber[2])<20) {
        readableNumber = unitsAndSimpleDozens[arrayFromNumber[0]] + ' ' + hundred + ' ' +
        unitsAndSimpleDozens[arrayFromNumber[1]+arrayFromNumber[2]];
        return readableNumber;
    }
    
    if (number>=100&& number<=999) {
        readableNumber = unitsAndSimpleDozens[arrayFromNumber[0]] + ' ' + hundred + ' ' +
        dozens[arrayFromNumber[1]-2] + ' ' + unitsAndSimpleDozens[arrayFromNumber[2]];
        return readableNumber;
    }
}


