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
    for(item of noDuplicates){ array.push(item)}
}

deleteDuplicated(array);
console.log(`modified array: [${array}]`)
// /FIRST TASK

//SECOND TASK
let text = 'a tejfel szomi mert szar a kedved'
console.log(`Second task \nbase text: ${text}`)

const birdizeVowel = (char) => {
    const vowels = ['a','á','e','é','i','í','u','ú','ü','ű','o','ó','ö','ő']
    vowels.includes(char) ? char = `${char}w${char}` : char
    return char
}


const toBirdLanguage = (string) => {
    let birdized = [];
    for(char of string){
        birdized.push(birdizeVowel(char));
    }
    console.log(birdized)
    console.log(birdized.join(''))

   //newString = string.split(' ').map(char => birdizeVowel(char))
   //console.log(newString)
}

toBirdLanguage(text)
console.log(`modified text: ${text}`)
// /SECOND TASK
