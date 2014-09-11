console.log(translate("the quick brown fox jumped over the lazy dog phlegm"));

/* Split string into array
** Loop thru each word + check if 1st letter is vowel
***** True: push to pigLatin array
***** False: jump to consonants()
*/
function translate(english) {
  var i, j;
  var pigArray = []
  var engArray = english.split(" ");
  console.log(engArray);
  for(i=0;i<engArray.length;i++)
    if(!isItConsonant(engArray[i][0])){
      pigArray.push(engArray[i]+ "ay");
    }else{
      pigArray.push(consonants(engArray[i]));
    }
  console.log(pigArray.join(" "));
  return pigArray.join(" ");
}

/* This seems waaayyy overcomplicated. There must be a better way with a loop + .substr 
**           *** Con == consonant. ***
*** Runs only if the first letter of the word is a Con.
***** if word is a special case (qu, squ, sch), jump to }else{
******* if the 2nd letter is !Con, return pigLatin
********* if 2rd letter is Con, check if 3rd is Con
*********** if 3rd letter is Con, return pigLatin
*********** else return 2nd-letter-Con pigLatin
*/
function consonants(word) {
  if(!specialCase(word)){  
    if(!isItConsonant(word[1]))
      return word.substr(1)+word[0]+"ay"
    else if(isItConsonant(word[1])){
      if(isItConsonant(word[2]))
        return word.substr(3)+word.substr(0,3)+"ay";
      else
        return word.substr(2)+word.substr(0,2)+"ay";
    }
/* This is the section that is almost exactly the same as specialCase() 
** If I get more time I may try to make a pigLatin method that accepts
** the original word and identified prefix then returns the rearranged
** word
*/
  }else{
    var two = word.substr(0,2);
    var three = word.substr(0,3)
    if(two === "qu"){
      return word.substr(2)+two+"ay";
    }else if((three === "sch")||
             (three === "squ")||
             (three === "sph")){
      return word.substr(3)+three+"ay";
    }
  }
}
  

/* Checks to see if a letter is a consonant */
function isItConsonant(fLetter) {
  var vowels = ["a","e","i","o","u"];
  var count = 0;
  for(each in vowels)
    if(fLetter==vowels[each])
      count++
  if(count>0)
    return false;
  else
    return true;
}


/* Returns 'true' if the word has a special case prefix
** This method is repeated almost exactly in consonants(),
** would love to figure out a way to consolidate into 1 
**/
function specialCase(word) {
  var two = word.substr(0,2);
  var three = word.substr(0,3)
  if(two === "qu"){
    return true;
  }else if((three === "sch")||(three === "squ")){
    return true;
  }else{
    return false;
  }
}