//Task 1
/**function ucFirst(str) {
    let capital = str[0].toUpperCase();
    let lower = str.toLowerCase();
    let rest = lower.slice(1);
    console.log(capital + rest);
}

function ucFirst2(str) {
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

ucFirst("joHn")
console.log(ucFirst2("joHn"))*/


//Task 2
/**function checkSpam(str) {
    let newstr = str.toLowerCase();
    if (newstr.includes('xxx') || newstr.includes('viagra')){
       return console.log("You are very susy boy")
    } else {
        console.log('You are family friendly')
    }
}

let sökord = prompt('Vad vill du googla?')
checkSpam(sökord)*/

//Task 3
function truncate(str, maxlength) {
    let strlenght = str.length
    if (strlenght > maxength) {
        return str.slice(maxlength) + ('...')
    } else {
        return str
    }

}

alert(truncate("What I'd like to tell on this topic is:", 20))
