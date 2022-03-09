const färger = ["♠", "♥", "♦", "♣"];
const valörer = [
  "Ess",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Knekt",
  "Dam",
  "Kung",
];

// Klass för att skapa spelkort
class Kort {
  constructor(valör, färg) {
    this.valör = valör;
    this.färg = färg;
  }
}

// Klass för stack
class Kortlek {
  constructor() {
    this.stack = [];
  }

  // Lägg ett kort överst i leken
  lägg_till_kort(item) {
    this.stack.push(item);
  }
  // Ta ett kort överst från leken
  dra_kort() {
    let draget_kort = this.stack.pop();
    console.log(`Du drar ${draget_kort.färg} ${draget_kort.valör}`);
    return draget_kort;
  }

  // Visa korten som finns i leken (I ordning)
  visa_lek() {
    this.stack.forEach((kort) => {
      console.log(kort.färg, kort.valör);
    });
  }

  // Visa hur många kort som finns
  visa_längd() {
    console.log(`Kortleken har ${this.stack.length} kort`);
  }

  // Blanda leken
  blanda() {
    for (let i = this.stack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.stack[i];
      this.stack[i] = this.stack[j];
      this.stack[j] = temp;
    }
  }
}

// 1. Skapa ett kortleks-objekt från klassen Kortlek
let kortlek = new Kortlek();

// 2. Skapa 52 kort som ni lägger till i erat kortleksobjekt.
//   a) Skapa en for-slinga som med variabeln i itererar genom alla färger.
//   b) Inuti den första for-slingan, skapa en ny for-slinga som med variabeln j itererar
//       genom alla valörer.
//   c) Nu kan ni i den nästlade for-slingan skapa ett nytt kort, och sedan pusha det till
//       kortleks-objektet.
//   d) Efter den nästlade for-slingan, testa att skriva ut alla kort med metoden visa_lek().
for (let i = 0; i < färger.length; i++) {
  for (let j = 0; j < valörer.length; j++) {
    let kort = new Kort(valörer[j], färger[i]);
    kortlek.lägg_till_kort(kort);
  }
}


// 3. Testa att blanda kortleken med blanda() och visa kortleken igen.

//kortlek.blanda();


// 4. Skapa en litet spel med en huvudmeny med följande menyval:

// ======================= ♠ ♥ ♦ ♣ ========================
//                        ~ Poker ~
// 1. Blanda Kortlek                     2. Välj fem kort
// 3. Värdera hand                       4. Avsluta
// ========================================================

// Spelet ska låta användaren välja fem kort (Du skapar alltså en kortlek och 'poppar' fem kort)
// Lätt: Värdera hand ska gå igenom de fem korten och meddela om användaren har ett par.
// Medel: Värdera hand ska även kunna märka om användaren har triss eller kåk.
// Svår: Värdera hand ska meddela om användaren har någon giltig pokerhand.
// Här finns olika pokerhänder: https://sv.wikipedia.org/wiki/Pokerhand

// Nedan följer exempel hur programmet kan kontrollera par. Det finns förbättringar att göra,
// t ex att separera triss, fyrtal och kåk från par. Lägg till sådan logik, avvakta med menyn.

let hand = {
    Ess: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    Knekt: 0,
    Dam: 0,
    Kung: 0,
  };



let minHand = hand;
let mittKort;
let färghand = false
let antalfärg = 1

// Dra fem kort
console.log("Drar fem kort");
for (let i = 0; i < 5; i++) {
  mittKort = kortlek.dra_kort();
  hand[mittKort.valör] += 1;
  if (i == 0) {
    färg_1 = mittKort.färg
  } else if (mittKort.färg == färg_1) {
    antalfärg++
      if (antalfärg == 5) {
        färghand = true
      }
}
}

let stege = false
for (let property in hand) {
  if (hand[property] == 1 || hand[property + 1] == 1 || hand[property + 2] == 1 || hand[property + 3] == 1 || hand[property + 4] == 1) {
    stege = true
  } else if (hand.Ess == 1) || hand.Kung == 1 || hand.Dam == 1 || hand.Knekt == 1 || hand.10 == 1) {
    stege = true
  }
}




let par = false;
let antalpar = 0;
let triss = false;
let fyrtal = false;
for (let property in hand) {
  if (hand[property] == 4) {
      fyrtal = true;
  } else if (hand[property] == 3) {
      triss = true;
  } else if (hand[property] == 2) {
      par = true;
      antalpar += 1
  }
}

if (fyrtal === true) {
    console.log('Du har fyrtal!')
} else if (färghand === "") {
    console.log('Du har färg')
} else if (stege === true) {
  console.log('Du har stege')
} else if ((triss === true) && (par === true)) {
    console.log('Du har kåk')
} else if (triss === true) {
    console.log('Du har triss') 
} else if (antalpar == 2) {
    console.log('Du har tvåpar')
} else if (par === true) {
    console.log('Du har par')
}

