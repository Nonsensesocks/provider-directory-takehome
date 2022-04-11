export function truncateText(text, length) {
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  if(text.length > length) {
    // cut string off at max length 
    let textToLength = text.substr(0, length);
    // cut unfinished words
    let textNoUnfinishedWords = textToLength.substr(0, Math.min(length, textToLength.lastIndexOf(" ")));
    // if last character is punctuation, remove it
    let lastCharReplacePunctuation = (textNoUnfinishedWords.slice(-1)).replace(punctuationRegex, '')
    // truncated text = text with no unfinished words - the last character + the last character passed through regex
    let truncatedText = textNoUnfinishedWords.substr(0, (textNoUnfinishedWords.length - 1)) + lastCharReplacePunctuation
    return truncatedText + '...';
  }
  return text
}

export function provinceAbbreviation(text) {
  switch (text) {
    case('Newfoundland and Labrador'):
      return 'NL'
    case('Prince Edward Island'):
      return 'PE'
    case('Nova Scotia'):
      return 'NS'
    case('New Brunswick'):
      return 'NB'
    case('Quebec'):
      return 'QC';
    case('Ontario'):
      return 'ON'
    case('Manitoba'):
      return 'MB'
    case('Saskatchewan'):
      return 'SK'
    case('Alberta'):
      return 'AB';
    case('British Columbia'):
      return 'BC';
    case('Yukon'):
      return 'YT';
    case('Northwest Territories'):
      return 'NT';
    case('Nunavut'):
      return 'NU';
    default:
      return 'ON';
  }
}