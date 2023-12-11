// Generating the Random Number
let y = Math.floor(Math.random() * 20 + 1);

//Coutning the Number of guesses
//made for correct Guess

let guess = 1;
document.getElementById("submitguess").onclick = function (){
    //Number guessed by User

    let x = document.getElementById("guessField").value;
    
  
    if (x == y){
        alert("CONGRATULATIONS !!! YOU GUESSED IT RIGHT " + guess  +  " GUESS");

    }
    else if (x>=20){
        alert("Error!! The number is between 0-20");
    }
    else if (y < x){
        guess++;
        alert("OPPS SORRY!! THE ONE YOU SELECTED IT WRONG. TRY A SMALLER NUMBER");
    }
    else if (x<0){
        alert("Error!! The number is between 0-20")
    }
   
   
    else 
    {
        guess++;
        alert("OPPS SORRY!! THE ONE YOU SELECTED IT WRONG. TRY A LARGER NUMBER")
    }
}




