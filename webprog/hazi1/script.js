
let array = [5, 6, 3, 2, 3, 4, 5];
console.log(array);
console.log('do not forget to enable fucking logs');
console.log(array);

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
    
    let duplicatedItems = hasDuplicates(array);
    console.log('duplicated items =' + duplicatedItems)

    for(const index in array){
        if(duplicatedItems.includes(array[index])){
          //  array.slice(index, 1)
          array[index] = 0;
        }
        if(array[index] != 0){
            console.log(array[index])
        }

    }
}

//tip => mindig hivd meg ujra a duplikacio megtalalo fuggvenyt a modositott tombodre

deleteDuplicated(array);
console.log(array);
