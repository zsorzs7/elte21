//FIRST TASK
let array = [5, 6, 3, 2, 3, 4, 5];
console.log(`First task \nbase array: [${array}]`)
let hasDuplicates = (array) => {
    let duplicates = [];
    for (const index in array) {
        if (index != array.lastIndexOf(array[index])) {
                duplicates.push(array[index])
        }
    }
    return duplicates;
}

let deleteDuplicated = (array) => {
    let noDuplicates = array.filter(item => !(hasDuplicates(array).includes(item)))
    array.splice(0, array.length)
    for(item of noDuplicates){ array.push(item)}
}

deleteDuplicated(array);
console.log(`modified array: [${array}]`)
// /FIRST TASK

//SECOND TASK
//make it into an array...
// /SECOND TASK
