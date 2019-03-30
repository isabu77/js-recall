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
        resultArray.push(array[i].split("").reverse().join(""));
  
    }
    return resultArray;
}

var everyPossiblePair = function(array) {
    //return array;
    var resultArray = [];
    for (i=array.length-1; i > 0; i--)
    {
        for (j = 0 ; j < i ; j++){
             var paire = [];
            if (array[j] != array[i])
            {
                if (i == array.length-1){
                    paire.push(array[i]);
                    paire.push(array[j]);
                }else{
                    paire.push(array[j]);
                    paire.push(array[i]);

                }
                resultArray.push(paire);
           }       
        }
    
      
    }
    return resultArray;
}

var allElementsExceptFirstThree = function(array) {
    var resultArray = [];
    for (i=3; i < array.length; i++)
    {
        resultArray.push(array[i]);
  
    }
    return resultArray;
}

var addElementToBeginning = function(array, element) {
    var resultArray = [1];

    for (i=0; i < array.length; i++)
    {
        resultArray.push(array[i]);
  
    }
    return resultArray;
}

var sortByLastLetter = function(array) {
    //return array;
    var resultArray1 = [];
    var resultArray = [];
     for (i=0; i < array.length; i++)
    {
        resultArray.push(array[i].split("").reverse().join(""));
    }
    resultArray = resultArray.sort();
     for (i=0; i < resultArray.length; i++)
    {
        resultArray1.push(resultArray[i].split("").reverse().join(""));
    }
     return resultArray1;
}

var getFirstHalf = function(string) {
    var array = string.split('');
    var resultArray = [];
    String str;
     for (i=0; i < array.length/2; i++)
    {
        resultArray.push(array[i]);
    }
    str = resultArray[i].split("");
    return str;
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
