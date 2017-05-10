let words = (sentence)=> {
  
  let wordsArray = sentence.split(" ");//this is to break the string into an array of words
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
 

   
  
}
for(i=0;i<uniquenessCheckerArray.length;i++)
{
 
jsonObj[uniquenessCheckerArray[i]]= numberOfOccurencesArray[i]; 

}

return jsonObj
}

words("olly olly in come free");


exports.words = words;