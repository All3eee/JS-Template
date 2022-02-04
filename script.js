let pengar = Number(prompt('Hur mycket pengar har du?'));

let järnsmycke = 200;
let silversmycke = 500;
let guldsmycke = 800;
let järnsmycke_amount = 0;
let silversmycke_amount = 0;
let guldsmycke_amount = 0;

let i = 0;

while(i < 1) {
    if (pengar >= guldsmycke) {
        guldsmycke_amount += 1;
        pengar -= guldsmycke;
    } else if (pengar >= silversmycke) {
        silversmycke_amount += 1;
        pengar -= silversmycke;
    } else if (pengar >= järnsmycke) {
        järnsmycke_amount += 1;
        pengar -= järnsmycke;
    } else if (pengar < 200) {
        console.log(`Du har råd med ${guldsmycke_amount} guldsmycken, ${silversmycke_amount} silversmycken och ${järnsmycke_amount} järnsmycken`)
        i += 1;
    }
}