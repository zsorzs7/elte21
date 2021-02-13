//FIRST TASK
let array = [5, 6, 3, 2, 3, 4, 5];
console.log(`First task \nbase array: [${array}]`)
const hasDuplicates = (array) => {
    let duplicates = []
    for (const index in array) {
        if (index != array.lastIndexOf(array[index])) {
            duplicates.push(array[index])
        }
    }
    return duplicates
}

const deleteDuplicated = (array) => {
    let noDuplicates = array.filter(item => !(hasDuplicates(array).includes(item)))
    array.splice(0, array.length)
    for (item of noDuplicates) { array.push(item) }
}

deleteDuplicated(array);
console.log(`modified array: [${array}]`)
// /FIRST TASK

//SECOND TASK
let text = 'de szép bauxit, honnan van?'
console.log(`Second task \nbase text: ${text}`)

const birdizeVowel = (char) => {
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'u', 'ú', 'ü', 'ű', 'o', 'ó', 'ö', 'ő']
    vowels.includes(char) ? char = `${char}w${char}` : char
    return char
}

const toBirdLanguage = (input) => {
    let birdized = [];
    for (char of input) {
        birdized.push(birdizeVowel(char));
    }
    return birdized.join('')
}

toBirdLanguage(text)
console.log(`modified text: ${toBirdLanguage(text)}`)
// /SECOND TASK

//THIRD TASK
let matrix = [[0, 0], [1, 2, 3, 4], [0, 1, 0], [0, 0, 0, 12], [0, 0, 0]]
console.log('Second task \nbase matrix:')
console.log(matrix)

let howManyZero = (matrix) => {
    let isNotNull = (number) => number !== 0;
    let zeros = matrix.length;
    for (let line of matrix) {
        if (line.some(isNotNull)) {
            zeros -= 1;
        }
    }
    return zeros
}

console.log(`there are ${howManyZero(matrix)} lines with only 0 values`)
// /THIRD TASK

//FOURTH TASK
console.log(`Fourth task`)
let dict = [
    {
        en: "moon",
        de: "der Mond",
        hu: "hold",
        rs: "mesec"
    },
    {
        en: "fox",
        de: "der Fuchs",
        hu: "róka",
        rs: "lisica"
    },
    {
        en: "girl",
        de: "das Mädchen",
        hu: "lány",
        rs: "devojka"
    }
];

let languageValidator = (dictionary, language) => {
    let isValid = false;
    let index = 0;
    let wordIndex = 0;
    for (const word of dictionary) {
        for (const key of Object.keys(word)) {
            if (key === language) {
                isValid = true;
                index = Object.keys(word).lastIndexOf(key);
            }
        }
    }
    return {isValid,index}
}

let wordValidator = (dictionary, word) => {
    let isValid = false;
    let index;
    for (const item in dictionary) {
        for (const value of Object.values(dictionary[item])) {
            if (value === word) {
                isValid = true;
                index = item;
            }
        }
    }
    return {isValid, index}
}

let translate = (word, from, to) => {
    if (wordValidator(dict, word).isValid && languageValidator(dict, from).isValid && languageValidator(dict, to).isValid) {
        let translated = Object.values(dict[wordValidator(dict, word).index])[languageValidator(dict, to).index]
        console.log(`the word you are looking for is ${translated}`)
    }
    else{
        console.log('no such word or language')
        return undefined
    }
}
console.log(`translate('lány', 'hu', 'de')`)
translate('lány', 'hu', 'de')

console.log(`translate('fox','en','rs')`)
translate('fox','en','rs')

console.log(`translate('kox','en','rs')`)
translate('kox','hu','rs')

//FOURT TASK