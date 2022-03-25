/*
let newproduct = 0
let higestsymmetricproduct = 0
for (let i = 100; i <= 999;i++) {
    for(let x = 100; x <= 999;x++) {
        newproduct = x*i
        newproduct = String(newproduct)
        if (newproduct.length == 5 && newproduct[0] == newproduct[4] && newproduct[1] == newproduct[3]) {
            if (newproduct > higestsymmetricproduct) {
                higestsymmetricproduct = newproduct
            }
        } else if (newproduct.length == 6 && newproduct[0] == newproduct[5] && newproduct[1] == newproduct[4] && newproduct[2] == newproduct[3]){
            if (newproduct > higestsymmetricproduct) {
                higestsymmetricproduct = newproduct 
    }
 }
}
}

console.log(higestsymmetricproduct)
*/

/*
let valueofword = 0
let valueofletter = 0

let pointsforletter = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
}

let word = prompt('Skriv ett ord')

for (let char of word) {
    console.log(char)
    valueofletter = pointsforletter[char]
    valueofword += valueofletter
}
console.log(valueofword)
*/

