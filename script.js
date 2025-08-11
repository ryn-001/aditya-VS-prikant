let participants = document.getElementById("participants");
let aditya_votes = document.getElementById("aditya-votes");
let prikant_votes = document.getElementById("prikant-votes");

let winner = document.getElementById("winner");
let winnerHeading = document.getElementById("winner-heading");
let winnerImage = document.getElementById("winner-image");

let winnerPrize = document.getElementById("winner-prize");
let prizeImage = document.getElementById("prize-image");
let winnerCandidateImage = document.getElementById("winner-candidate-image");

let restartButton = document.getElementById("restart-button");

let adityaButton = document.getElementById("aditya-button");
let prikantButton = document.getElementById("prikant-button");

let adityaVotes = Number(localStorage.getItem("aditya")) || 0;
let prikantVotes = Number(localStorage.getItem("prikant")) || 0;

function init(){
    adityaVotes = Number(localStorage.getItem("aditya")) || 0;
    prikantVotes = Number(localStorage.getItem("prikant")) || 0;

    aditya_votes.innerHTML = adityaVotes;
    prikant_votes.innerHTML = prikantVotes;

    checkWinner();
}

function checkWinner(){
    if(adityaVotes >= 100){
        participants.style.display = "none";
        winner.style.display = "flex";
        winnerCandidateImage.style.display = "block"
        winnerImage.src = "./aditya.jpg";
        winnerHeading.textContent = "Aditya Wins";
        restartButton.style.display = "block";

        adityaButton.disabled = true;
        prikantButton.disabled = true;
    } else if(prikantVotes >= 100){
        participants.style.display = "none";
        winner.style.display = "flex";
        winnerCandidateImage.style.display = "block"
        winnerImage.src = "./prikant.jpg";
        winnerHeading.textContent = "Prikant Wins";
        restartButton.style.display = "block";

        adityaButton.disabled = true;
        prikantButton.disabled = true;
    } else {
        adityaButton.disabled = false;
        prikantButton.disabled = false;
    }
}

adityaButton.addEventListener("click", () => {
    adityaVotes = Number(localStorage.getItem("aditya")) + 1;
    localStorage.setItem("aditya",adityaVotes.toString());
    aditya_votes.innerHTML = adityaVotes;
    checkWinner();
});

prikantButton.addEventListener("click", () => {
    prikantVotes = Number(localStorage.getItem("prikant")) + 1;
    localStorage.setItem("prikant",prikantVotes.toString());
    prikant_votes.innerHTML = prikantVotes;
    checkWinner();
});

restartButton.addEventListener("click", () => {
    localStorage.setItem("aditya","0");
    localStorage.setItem("prikant","0");

    winner.style.display = "none";
    winnerCandidateImage.style.display = "none";
    restartButton.style.display = "none";

    participants.style.display = "flex";

    adityaButton.disabled = false;
    prikantButton.disabled = false;

    init();
})

init();

