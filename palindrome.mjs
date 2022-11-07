export default class Palindrome {

    reverseWord(word) {
        return word.split("").reverse().join("");
    }

    generatePalindrome(word) {
        if(typeof word === 'undefined') return;
        return word + word.split('').reverse().join('');
    }
        
    isPalindrome(word) {
        return word === word.split('').reverse().join('');
    }


}

