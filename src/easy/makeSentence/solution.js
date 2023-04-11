// # Make Sentence

// Given a sentence, capitalise the first letter and add a full stop to the end.
// However, if the sentence already ends with some form of puncutation, leave it as is.

// Limited solution, only checks if the last character is . ! , or ?

function capitalise(sentence) {
    let firstLetter = sentence.charAt(0).toUpperCase();
    let restOfSentence = sentence.slice(1);
    let lastChar = sentence.charAt(sentence.length - 1);
  
    if (lastChar === '.' || lastChar === '!' || lastChar === '?' || lastChar ===`,`) {
      return firstLetter + restOfSentence;
    } else {
      return firstLetter + restOfSentence + '.';
    }
  }

// Regex solution, checks if the last character is a number or letter. If it is then it adds a . and if it ends with anything else it leaves it alone.

function capitalise(sentence) {
    let firstLetter = sentence.charAt(0).toUpperCase();
    let endCharacter = /[a-zA-Z0-9]$/.test(sentence) ? '.' : '';
    return firstLetter + sentence.slice(1) + endCharacter;
  }

  console.log(capitalise(`testing this function,`))