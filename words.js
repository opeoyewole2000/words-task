let words = (sentence)=> {
  
  let wordsArray = [];
  if(sentence.includes(" ")){
    
     wordsArray = sentence.split(" ");//this is to break the string into an array of words
  }
  else if(sentence.includes('  ')){
    
     wordsArray = sentence.split('  ');//this is to break the string into an array of words
    
  }
  else if(sentence.includes("\n")){
    
     wordsArray = sentence.split("\n");//this is to break the string into an array of words
  }
  else if(sentence.includes("\t")){
    
     wordsArray = sentence.split("\t");//this is to break the string into an array of words
  }

   else {
    wordsArray.push(sentence);
    
  }
  
  if (wordsArray.indexOf('')> -1){//This if construct is to satisfy a test that involve multiple gaps by removing '' from the array 
       wordsArray.splice(1,1);
     }
 
  wordsArrayLength = wordsArray.length;
  uniquenessCheckerArray = [];// array that holds words that have been checked to avoid repitition
   
  
  let  newArray = [];
  let jsonObj = {};
  let numberOfOccurences = 1;//this tracks the number of occurences
  let numberOfOccurencesArray = []//this hold the number of occurences for each word
  
  if (wordsArrayLength === 0){
    return "add at least a word"
    
  }
  else
  {
  let i=0
  while(i < wordsArrayLength)
  {
    if(uniquenessCheckerArray.indexOf(wordsArray[i]) >-1 )//check if uniquenessCheckerArray contains the current element
    {
      i++;
      
    }
    else{
    for(j=i+1;j<wordsArrayLength;j++)
    {
      if(wordsArray[i] === wordsArray[j] )
      {
        numberOfOccurences++
      }
     
    }
    uniquenessCheckerArray.push(wordsArray[i]);
     numberOfOccurencesArray.push(numberOfOccurences);
     numberOfOccurences = 1;
    i++
    }
  }
 
console.log(wordsArray);
   
  
}
for(i=0;i<uniquenessCheckerArray.length;i++)
{
 
jsonObj[uniquenessCheckerArray[i]]= numberOfOccurencesArray[i]; 

}

return jsonObj
}

words("Hello  world");


exports.words = words;