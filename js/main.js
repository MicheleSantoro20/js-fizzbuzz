
//Creiamo un riferimento al container di dom
const containerDom = document.querySelector('.container');


// Dopodichè gli diciamo che bisogna fare una conta dei numeri a partire da uno fino a 100
// Una volta spiegatogli come contare bisogna inserire questi numeri all'interno dei div e farli creare all'interno del container
for (let i = 1; i <= 100; i++ ) {
    const containerNumber = document.createElement('div');
    containerNumber.classList.add('square');
    containerNumber.append(i);
    containerDom.append(containerNumber);



/* 
    Qui spiego alle varie caselle che se sono multiple di 3, multiple di 5 
    e multiple sia di 3 che di 5 il loro nome ed il loro colore di sfondo cambia
*/
    if (i % 3 == 0 && i % 5 == 0) {
        containerNumber.innerHTML = `fizzBuzz`;
        containerNumber.classList.add ('rosso')
    } else if ( i % 5 == 0){
        containerNumber.innerHTML = `Buzz`;
        containerNumber.classList.add ('giallo')
    } else if (i % 3 == 0) {
        containerNumber.innerHTML = `fizz`;
        containerNumber.classList.add ('verde')
    }

    console.log(containerNumber.innerHTML)
}
