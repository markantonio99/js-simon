



const numeriGenerati = nunberGenerete(5, 1, 50); // chiamo la funzione e assegno il valore di ritorno a numeriGenerati


const promptNunber = []

const numeriIndovinati = []

alert(`Ricorda questi numeri: ${numeriGenerati.join(', ')}`);




setTimeout(() => {
    while (promptNunber.length < numeriGenerati.length){
        let numeriUtente = parseInt(prompt('inserisci i numeri che ti ricordi'))
       

           if (numeriGenerati.includes(numeriUtente) && !promptNunber.includes(numeriUtente)){
            console.log('numero indovinato')
             
            numeriIndovinati.push(numeriUtente)
             
           }

           promptNunber.push(numeriUtente)

     }

     

    console.log(`hai totalizzato il punteggio di ${numeriIndovinati.length} su 5, lista numeri indovionati: ${numeriIndovinati.join(' - ')}`)


}, 3*1000)


function nunberGenerete(length, min, max) {
  let numeriGenerati = [];

  while (numeriGenerati.length < length) {
    const num = generaNumeriRandom(min, max);

    if (!numeriGenerati.includes(num)) {
      numeriGenerati.push(num);
    }
  }

  return numeriGenerati;
}

function generaNumeriRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
