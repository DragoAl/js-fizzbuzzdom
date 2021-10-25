// programma che esegue un ciclo da 1 a 100
// e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
// per i multipli di 3,
// per i multipli di 5
// e per i valori che sono sia multipli di 3 che di 5.

const contSquare = document.getElementById("container-square");

for (let i = 1; i <= 100; i++){

    let square = document.createElement("div");
    square.classList.add("square");
    
    contSquare.append(square);
    
    //  if ((i % 3 == 0) && (i % 5 == 0))
    if (i % 15 == 0){
        square.classList.add("squarered");
        square.append("FizzBuzz");

    } else if (i % 5 == 0) {
        square.classList.add("squareacqua");
        square.append("Fizz");

    } else if(i % 3 == 0) {
        square.classList.add("squareyellow");
        square.append("Buzz");
    }else{
        square.classList.add("squareblue");
        square.append(i);


    }

}
