function vowelsInString(string) {
        // find the count of vowels
        const vowels = string.match(/[aeiou]/gi).length;
        // return number of vowels
        return vowels;
}
