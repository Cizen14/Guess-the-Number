// Generating the Random Number
let x = Math.floor(Math.random() * 20 + 1);

//Coutning the Number of guesses
//made for correct Guess

let guess = 1;
document.getElementById("submitguess").onclick = function (){
    //Number guessed by User

    let y = document.getElementById("guessField").value;
    if (x == y){
        alert("CONGRATULATIONS !!! YOU GUESSED IT RIGHT" +   guess   +  "GUESS");

    }
    else if (x < y){
        guess++;
        alert("OPPS SORRY!! THE ONE YOU SELECTED IT WRONG. TRY A SMALLER NUMBER");
    }
   
    else (x > y)
    {
        guess++;
        alert("OPPS SORRY!! THE ONE YOU SELECTED IT WRONG. TRY A LARGER NUMBER")
    }

}


