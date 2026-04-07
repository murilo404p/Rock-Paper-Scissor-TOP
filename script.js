// Função para o computador escolher uma jogada aleatória
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]; // Cada valor dentro do array tem seu index
    const index = Math.floor(Math.random() * options.length); // gera um valor aleatório entre 0 e 2
    const choice = options[index]; // choice ira guardar o valor 
    return choice;
}

function getHumanChoice() {
    
}