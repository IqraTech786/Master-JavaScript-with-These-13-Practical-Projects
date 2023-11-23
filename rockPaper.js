const Playertx = document.querySelector("#playerTx");
const ComputerTx = document.querySelector("#computerTx");
const resultTx = document.querySelector("#resultTx");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let computer;
let Player;
let result;


choiceBtn.forEach(button => button.addEventListener("click",()=>{
    Player = button.textContent
    computerTr();
    Playertx.textContent = `Player : ${Player}`
    ComputerTx.textContent = `Computer : ${computer}`
    resultTx.textContent = checkWinner();
}))

function computerTr(){
    const randNum = Math.floor(Math.random() * 3)+1;
    switch(randNum){
        case 1:
        computer = "Rock";
        break;

        case 2:
        computer = "Paper";
        break;

        case 3:
        computer = "Scissors";
        break;
    }
}

function checkWinner() {
    if (Player == computer) {
        return "Draw";
    } 
    else if (computer == "Rock"){
        return (Player == "Paper") ? "You win" : "You Lose"
    } 

    else if (computer == "Paper"){
        return (Player == "Scissors") ? "You win" : "You Lose"
    } 
    
    else if (computer == "Scissors"){
        return (Player == "Rock") ? "You win" : "You Lose"
    }
}


