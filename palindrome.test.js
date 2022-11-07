import Palindrome from "./palindrome.mjs";

describe("Palindrome", () => {
    let palindrome;

    beforeEach(() => {
        palindrome = new Palindrome();
    });

    test ("reverse of software", () => {
        expect(palindrome.reverseWord("software")).toBe("erawtfos");
    });

    test ("generate palindrome of software", () => {
        expect(palindrome.generatePalindrome("software")).toBe("softwareerawtfos");
    });

    test ("is software a palindrome", () => {
        expect(palindrome.isPalindrome("software")).toBe(false);
    });

    //palindrome of undefined aca se rompe
    test ("generate palindrome of undefined", () => {
        expect(palindrome.generatePalindrome(undefined)).toBe("");
    });

    /*test ("is kayak a palindrome", () => {
        expect(palindrome.isPalindrome("kayak")).toBe(true);
    });*/

    //---------------------------------------------------------------------------------------------------

    /*describe("generatePalindrome", () => {
        it("should generate a palindrome from a word", () => {
            expect(palindrome.generatePalindrome("hola")).toBe("holaaloh");
        });
    });

    describe("isPalindrome", () => {
        it("should return true if the word is a palindrome", () => {
            expect(palindrome.isPalindrome("holaloh")).toBe(true);
        });

        it("should return false if the word is not a palindrome", () => {
            expect(palindrome.isPalindrome("hola")).toBe(false);
        });
    }
    );*/
});
