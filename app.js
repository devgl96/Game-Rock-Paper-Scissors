let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";

    return "Scissors";
}

function win(userChoice, computerChoice){
    //console.log("WIN");
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

//setTimeout(function(){ console.log("Hello")}, 3000);

function lose(userChoice, computerChoice){
    //console.log("LOST");
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses  ${convertToWord(computerChoice)}${smallCompWord}. You lost... 💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice){
    //console.log("DRAWWW");
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals  ${convertToWord(computerChoice)}${smallCompWord}. It's a draw. 👐`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        // User Wins
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice); //console.log("USER WINS!");
            break;
        
        // Computer Wins
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice); //console.log("COMPUTER WINS! or USER LOSES!");
            break;
        
        // UserChoice is equal to ComputerChoice
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice); //console.log("Its a draw");
            break;
    }
}

function main(){
    // Action on Rock
    rock_div.addEventListener('click', () => game("r"));

    // Action on Paper
    paper_div.addEventListener('click', () => game("p"));

    // Action on Scissors
    scissors_div.addEventListener('click', () => game("s"));
}

// Begin the game
main();