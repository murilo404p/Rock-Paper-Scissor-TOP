let humanScore = 0;
let computerScore = 0;
let gameActive = false;
let computerChoice;
let humanSituation;
let computerSituation;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]; // Cada valor dentro do array tem seu index
    const index = Math.floor(Math.random() * options.length); // gera um valor aleatório entre 0 e 2
    const choice = options[index]; // choice ira guardar o valor 
    return choice;
}


//Para quando a pessoa clicar na jogada
let play;
window.addEventListener('click', (e) => {
   if (e.target.id === "rock" || e.target.id === "paper" || e.target.id === "scissors" ) {
    play = e.target.id;
    gameActive = true;
    console.log(play);
    } 
    if (!gameActive) {
        return;
    }

    computerChoice = getComputerChoice();
    playRound(play, computerChoice);
});


function playRound(human, computer) {
    if (human === computer) {
        document.getElementById("paragraph").innerText = "Draw! Play again."
    } else if (human === "rock" && computer === "paper") {
        computerSituation = true;
        updateScoreUI();
        document.getElementById("paragraph").innerHTML = "The computer chose paper! Point for Computer!"
        gameFlow();
    } else if (human === "rock" && computer === "scissors") {
        humanSituation = true;
        updateScoreUI();
        document.getElementById("paragraph").innerHTML = "The computer chose scissors! You got a point!"
        gameFlow();
    } else if (human === "paper" && computer === "rock") {
        humanSituation = true;
        updateScoreUI();
        document.getElementById("paragraph").innerHTML = "The computer chose rock! You got a point!"
        gameFlow();
    } else if (human === "paper" && computer === "scissors") {
        computerSituation = true;
        updateScoreUI();
        document.getElementById("paragraph").innerHTML = "The computer chose scissors! Point for Computer!"
        gameFlow();
    } else if (human === "scissors" && computer === "rock") {
        computerSituation = true;
        updateScoreUI();
        document.getElementById("paragraph").innerHTML = "The computer chose rock! Point for Computer!"
        gameFlow();
    } else if (human === "scissors" && computer === "paper") {
        humanSituation = true;
        updateScoreUI();
        document.getElementById("paragraph").innerHTML = "The computer chose paper! You got a point!"
        gameFlow();
    }
} 

// função que controla o fluxo do jogo (verificando a pontuação)
function gameFlow() {
    if (humanScore === 5 || computerScore === 5) {
        document.getElementById("paragraph").innerText = "Play Again! First to score 5 points wins the game!."
        gameActive = false;
        humanScore = 0;
        computerScore = 0;
        document.getElementById("scoreCompUI").innerHTML = "Points: 0" ;
        document.getElementById("scoreHumUI").innerHTML = "Points: 0";
    }
}

// Função para atualizar os pontos na tela do usuário
function updateScoreUI() {
    if (humanSituation == true) {
        humanScore++;
        document.getElementById("scoreHumUI").innerHTML = "Points: " + humanScore;
        humanSituation = false;
    } else if (computerSituation == true) {
        computerScore++;
        document.getElementById("scoreCompUI").innerHTML = "Points: " + computerScore;
        computerSituation =  false;
    }
}