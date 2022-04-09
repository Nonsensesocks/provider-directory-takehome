export function bioFormatter(string, length) {
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    if(string.length > length) {
        //trim the string to the maximum length
        let trimmedString = string.substr(0, length);
    
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
        // if last character is punctuation, remove it
        trimmedString = trimmedString.slice(0).replace(punctuationRegex, '');

        return trimmedString + '...';
    }
    return string
}