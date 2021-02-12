let t = [2, 5.6, -6, 0, 0.01]
function cub(n){
    return n.map(n => n*n*n)
}

console.log(cub(t))

let string = "aekfdssdlesds"

let isVowel = (c) => {
    //includes
    vow = ["e","u","i","o","a"]
    return vow.includes(c)
}

let count = (s) => {
    return s.split('').filter(isVowel).length
}

console.log(count('elte ik'))

let sum = () => {
return a.reduce((sum, e) =>  {sum + e }, 0)
}

console.log(sum(t))

//spread operator

function array_max(a){
    return a.reduce((max, e) => { e > max ? e : max }, -Infinity )
}

console.log(array_max(t))