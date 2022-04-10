export function truncateText(text, length) {
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    if(text.length > length) {
        // cut string off at max length 
        let textToLength = text.substr(0, length);
        // cut unfinished words
        let textNoUnfinishedWords = textToLength.substr(0, Math.min(length, textToLength.lastIndexOf(" ")));

        // if last character is punctuation, remove it
        let lastCharReplacePunctuation = (textNoUnfinishedWords.slice(-1)).replace(punctuationRegex, '')
        
        let truncatedString = textNoUnfinishedWords.substr(0, (textNoUnfinishedWords.length - 1)) + lastCharReplacePunctuation

        return truncatedString + '...';
    }
    return text
}