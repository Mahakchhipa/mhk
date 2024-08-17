let userscore = 0;
let compuscore = 0;

const choice = document.querySelectorAll(".choice_img");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const comscorepara = document.querySelector("#computerscore");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};
const drawGame = () => {

    msg.innerText = "Game was draw. Play again"
    msg.style.backgroundColor = "black";

};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You are win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compuscore++;
        comscorepara.innerHTML = compuscore;
        msg.innerText = `You lose! your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }
};

choice.forEach((choice_img) => {
    choice_img.addEventListener("click", () => {
        const userChoice = choice_img.getAttribute("id");
        playGame(userChoice);
    });
});




