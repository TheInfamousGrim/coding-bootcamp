function pallindromePresent(str) {
    const reversedString = str.split('').reverse().join('');
    return reversedString === str;
}
