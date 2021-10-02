/* exported titleCase */
/*
  input: any JavaScript string
  output: original title but with APA Title Case Style applied

  -create a storage variable for title array
  -create a variable for the current word
  -lowercase the title and split into elements into the array
  -go through each element of the title array
  -check the word against conditions of it's the first of the title
  -uppercase the first letter and leave the rest lowercase
  -if the condition isn't met, call a function to check against hard code
  terms then store it back into the array
  -rejoin the words into a string
  -check against special characters and if the end of the string is reached
  -return the new string
*/
function titleCase(string) {
  var titleArray = string.toLowerCase().split(' ');
  var currentWord = '';
  for (var i = 0; i < titleArray.length; i++) {
    if ((i === 0 && titleArray[i] !== 'javascript:') || (titleArray[i].length >= 4 && (titleArray[i] !==
      'javascript') && (titleArray[i] !== 'javascript:'))) {
      titleArray[i] = titleArray[i][0].toUpperCase() + titleArray[i].substr(1);
    } else {
      titleArray[i] = isHardCode(titleArray[i]);
    }
  }

  var titleArrayModified = titleArray.join(' ');
  var titleReturn = '';

  for (var j = 0; j < titleArrayModified.length; j++) {
    if (titleArrayModified[j] === ' ') {
      titleReturn += currentWord;
      currentWord = '';
    }
    if (j === titleArrayModified.length) {
      titleReturn += currentWord;
      currentWord = '';
    }
    if (titleArrayModified[j] === '-') {
      titleReturn += currentWord + '-';
      titleReturn += titleArrayModified[j + 1].toUpperCase();
      currentWord = '';
      j += 2;
    }
    if (titleArrayModified[j] === ':') {
      titleReturn += currentWord;
      titleReturn += ': ' + titleArrayModified[j + 2].toUpperCase();
      currentWord = '';
      j += 3;
    }
    currentWord += titleArrayModified[j];
    if (j === titleArrayModified.length - 1) {
      titleReturn += currentWord;
    }
  }
  return titleReturn;
}

function isHardCode(string) {
  switch (string) {
    case 'javascript' :
      return 'JavaScript';
    case 'javascript:' :
      return 'JavaScript:';
    case 'web':
      return 'Web';
    case 'api':
      return 'API';
    default:
      return string;
  }
}
