const reverseString = string => ('' === string ? '' : reverseString(string.slice(1)) + string[0]);

const offsetCharacters = (string, offset) => {
    offset = 26 - offset;

    let result = string.split('').reduce((acc, curr) => {
        let characterCode = curr.charCodeAt(0);
        return (acc +=
            characterCode >= 65 && 90 >= characterCode
                ? String.fromCharCode((characterCode - 65 + offset) % 26 + 65)
                : characterCode >= 97 && 122 >= characterCode
                  ? String.fromCharCode((characterCode - 97 + offset) % 26 + 97)
                  : curr);
    }, '');

    return result;
};

const scramble = (input, offset) => reverseString(offsetCharacters(input, offset));
const unscramble = (input, offset) => offsetCharacters(reverseString(input), 0 - offset);
