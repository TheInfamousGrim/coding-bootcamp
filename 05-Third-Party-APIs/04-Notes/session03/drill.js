function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
        const c = str.charAt(i);
        if (str.indexOf(c) === i && str.indexOf(c, i + 1) === -1) {
            return console.log(c);
        }
    }
    return console.log(null);
}

firstNonRepeatedChar('the quick brown fox jumps over the calm kitten quietly');
