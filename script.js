// Função para o computador escolher uma jogada aleatória
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
    console.log(play);
   } 
});

let humanScore = 0;
let computerScore = 0;
