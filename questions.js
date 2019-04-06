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
    //return string;
    var array = string.split('');
    var resultArray = [];
    var str;
    if (array.length%2){
       array.push('g');

    }
     for (i=0; i < (array.length)/2; i++)
    {
        resultArray.push(array[i]);
    }
    str = resultArray.join("");
    return str;
}

var makeNegative = function(number) {
    var num = -number;
    if (number < 0 )
        return number;
    else
        return num
    //var num = -Math.abs(number);
    //return (number);
}

var numberOfPalindromes = function(array) {
    var chaine, chainereverse;
    var nb = 0;
    var i;
     for (i=0; i < array.length; i++)
    {
        chaine = array[i].split("").join()
        chainereverse = array[i].split("").reverse().join();
        if (chaine === chainereverse){
            nb++;
        }
    }
    return nb;
}

var shortestWord = function(array) {
    var indice = 0;
    var taillemin = array[0].length;
    var i;
     for (i=0; i < array.length; i++)
    {
        if (array[i].length < taillemin){
            taillemin = array[i].length;
            indice = i;
        }
    }
    return array[indice];
}

var longestWord = function(array) {
    var indice = 0;
    var taillemax = 0;
    var i;
     for (i=0; i < array.length; i++)
    {
        if (array[i].length > taillemax){
            taillemax = array[i].length;
            indice = i;
        }
    }
    return array[indice];
}

var sumNumbers = function(array) {
    var i, nb = 0;
    for (i=0; i < array.length; i++)
    {
        nb = nb +array[i];
    }
    return nb;
}

var repeatElements = function(array) {
    var i, nb = array.length;
    for (i=0; i < nb; i++)
    {
        array.push(array[i]);
    }
    return array;
}

var stringToNumber = function(string) {
    return parseInt(string);
}

var calculateAverage = function(array) {
    var i, nb = 0;
    var average = 0;
    for (i=0; i < array.length; i++)
    {
        nb = nb + array[i];
    }
    return nb/array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
    var i;
    var resultArray = [];
    for (i=0; i < array.length; i++)
    {
        if (array[i] <= 5){
            resultArray.push(array[i]);
        }else{
            break;
        }
    }
    return resultArray;
}

var convertArrayToObject = function(array) {
    var i;
    var objet= {};
    for (i=0; i < array.length; i = i + 2)
    {
        objet[array[i]] = array[i+1];
    }

    return objet;
}

var getAllLetters = function(array) {
    var i,j;
    var resultArray = [];
    var mot;
    for (i=0; i < array.length; i++)
    {
        mot = array[i].split("");
        for (j = 0 ; j < mot.length ; j++){
            if (resultArray.indexOf(mot[j]) === -1)
                resultArray.push(mot[j]);              
        }
    }
    return (resultArray.sort());
}

var swapKeysAndValues = function(object) {
    var i;
    var resultobjet = {};
    var cles = Object.keys(object);
    var valeurs = Object.values(object);
     for (i=0; i < cles.length; i++)
    {
        resultobjet[valeurs[i]] = cles[i];
    }
   
    return resultobjet;
}

var sumKeysAndValues = function(object) {
    var i,sum = 0;
    var cles = Object.keys(object);
    var valeurs = Object.values(object);
     for (i=0; i < cles.length; i++)
    {
        sum += parseInt(valeurs[i]) + parseInt(cles[i]);
    }
   
    return sum;
}

var removeCapitals = function(string) {
    var i;
    var result = "";
    for (i=0; i < string.length; i++)
    {
        if (string[i].toUpperCase() != string[i] || string[i] === ' ')
            result += string[i];
    }
   
    return result;
}

var roundUp = function(number) {
    return Math.round(number)+1;
}

var formatDateNicely = function(date) {
    var dateResult = "";
    //var options = {year: "numeric", month: "long", day: "numeric"};
    //dateResult = date.toLocaleString('fr-FR', options);
    if (date.getUTCDate() < 10){
        dateResult = "0";
    }
    dateResult = dateResult + date.getUTCDate() + "/";
     if ((date.getMonth()+1) < 10){
        dateResult += "0";
    }
    dateResult += (date.getMonth()+1) + "/" + date.getFullYear();
  return dateResult;
}

var getDomainName = function(string) {
    var result = "";
    var ind1 = string.indexOf("@");
    if (ind1 === -1)
        ind1 = 0;

    var ind2 = string.length;
    var indpoint = string.indexOf(".");
    while(indpoint != -1){
        ind2 = indpoint;
        indpoint = string.indexOf(".", ind2+1);
    }
    result = string.substring((ind1+1), ind2);
    return result;
}

var titleize = function(string) {
    var array = string.split(".");
    var str = "";
    var resultArray = [];
    var i;
    for (i = 0 ; i < array.length ; i++){
        
        if (array[i].charAt(0) === ' ')
            array[i] = array[i].charAt(0) + array[i].charAt(1).toUpperCase() + array[i].slice(2);
        else
            array[i] = array[i].charAt(0).toUpperCase()  + array[i].slice(1);

        if (array.length > 1 && i < (array.length-1))
            str += array[i] + ".";
        else
           str += array[i];
    }
    array = str.split(" ");
    for (i = 0 ; i < array.length ; i++){
        // array[i] est une chaine : mettre en majuscule la première lettre
        if (array[i] != 'the' && array[i] != 'and')
        {
            var newStr = "";
            newStr = array[i].charAt(0).toUpperCase() + array[i].slice(1);
            resultArray.push(newStr);
        }
        else{
            resultArray.push(array[i]);
        }


     }

    return resultArray.join(" ");
}

var checkForSpecialCharacters = function(string) {
    var i;
    for (i=0; i < string.length; i++)
    {
        if ( ! ((string[i] >= 'a' && string[i] <= 'z' )
                || (string[i] >= 'A' && string[i] <= 'Z' ) 
                || (string[i] >= '0' && string[i] <= '9' )
                ) ){
            return(true);
        }
    }
    return (false);
}  
 

var squareRoot = function(number) {
    return Math.sqrt(number);
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
