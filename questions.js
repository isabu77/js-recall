var selectElementsStartingWithA = function(array) {
    var resultArray = [];
    for (i=0; i < array.length; i++)
    {
        if (array[i][0].toLowerCase() == 'a')
            resultArray.push(array[i]);
    }
    return resultArray;
}

var selectElementsStartingWithVowel = function(array) {
    var vowelTable = ['a','e','i','o','u','y'];
    var resultArray = [];
    for (i=0; i < array.length; i++)
    {
        for (j=0; j<vowelTable.length; j++){
            if (array[i][0].toLowerCase() == vowelTable[j])
                resultArray.push(array[i]);

        }
    }
    return resultArray;
}

var removeNullElements = function(array) {
    //array.removeNullElements;
    var resultArray = [];
    for (i=0; i < array.length; i++)
    {
        if (array[i] != null)
            resultArray.push(array[i]);
    }
    return resultArray;
}

var removeNullAndFalseElements = function(array) {
    //return array;
    var resultArray = [];
    //resultArray = array.removeNullAndFalseElements();
    for (i=0; i < array.length; i++)
    {
        if (array[i] === 0){
             resultArray.push(array[i]);
          
        }else{
            if (array[i] != null && array[i] != false)
                resultArray.push(array[i]);

        }
    }
    return resultArray;
}

var reverseWordsInArray = function(array) {
    //return array;
    var resultArray = [];
    var chaine = [];
    for (i=0; i < array.length; i++)
    {
         var chaine = array[i].split();
        //chaine = array[i];
        //resultArray.push(array[i]);
        //resultArray.push(array[i].reverseWordsInArray());
        var k = 0;
        for (j = array[i].length-1; j >= 0; j--){
           chaine[k] = array[i][j];
            k++;
        }
        chaine.split;
       resultArray.push(chaine);
 
    }
    return resultArray;
}

var everyPossiblePair = function(array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
    return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
    return 'Write your method here';
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
