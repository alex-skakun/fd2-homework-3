

import { splitIntoWords } from './string-utils.js';




// Two argument(text and array) and return object



function getAmountWords(target,  arrayAllWords){

    let amount = 0;

    arrayAllWords.forEach(function(item){
    
        if(item === target){
    
            amount++;
        };
    
    
    });

    return amount;

};



function textAndArrayAndObject(arrayAllWords, arrayTarget){

    let resultObject = {};


    for(let char of arrayTarget){

        resultObject[char] = getAmountWords(char, arrayAllWords);
    
    
       };


       return resultObject;

};




// Two argument(text and word) and return object


function textAndWordAndObject(arrayAllWords, target){

    let amount = 0;

    arrayAllWords.forEach(function(item){
    
        if(item === target){
    
            amount++;
        };
    
    
    });

    return amount;

};


// One argument(text) and return object


function amountWord(diffWords, arrayAllWords){

    let amount = 0;

    let res = arrayAllWords.filter(function(item){

       if(diffWords === item){

        amount++;

       };


    });

    return amount;
    

};

function textAndObject(arrayWords){

    let differentValues = [];
    
    let resultObject = {};


    for(let char of arrayWords){
 
     if(!differentValues .includes(char)){
 
        differentValues.push(char);
 
     };
 
    };


   for(let char of differentValues ){

    resultObject[char] = amountWord(char, arrayWords);


   };


  return  resultObject;


};

// Main Function

export function getWordCount(text, argument){


  let arrayAllWords = splitIntoWords(text);



    if(typeof argument === 'string'){

       return textAndWordAndObject(arrayAllWords, argument);

    }else if(typeof argument === 'object'){

       return textAndArrayAndObject(arrayAllWords, argument);

    }else if(typeof argument === 'undefined'){
        
        return textAndObject(arrayAllWords);

    };


};





