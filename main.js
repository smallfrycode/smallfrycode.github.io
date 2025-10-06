const form = document.querySelector("form");

function redirect(location) {
    window.location.href = location;
}

function validateText() {
    var validationRegEx = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let userInput = document.getElementById("reason").value;
    console.log(userInput);
    if (validationRegEx.test(userInput)) {
        alert("Nuh uh: special character(s) found.");
    } else {
        redirect("submitted.html");
    }
}

function randomPick() {
    const selection = ["rock", "paper", "scissors", "spock"];
    const choice = Math.floor(Math.random() * 4);
    return selection[choice];
}

function rpsGame() {
    const computerChoice = randomPick();
    const plrChoice = document.getElementById("choice").value;
    let plrText = document.getElementById("plrText");
    let computerText = document.getElementById("computerText");

    if (!["rock", "paper", "scissors"].includes(plrChoice)) {
        alert("OI Stop injecting code >:(");
        return;
    }
    if ((computerChoice == "spock") ||(computerChoice == "rock" && plrChoice == "scissors") ||
        (computerChoice == "scissors" && plrChoice == "paper") || (computerChoice == "paper" && plrChoice == "rock")) {
        alert("You Lose");
        document.body.style.backgroundColor = "red";
    } else if (computerChoice == plrChoice) {
        alert("Tie");
        document.body.style.backgroundColor = "blue";
    } else {
        alert("You Win");
        document.body.style.backgroundColor = "green";
    }
    
    plrText.innerHTML = plrChoice.toUpperCase();
    computerText.innerHTML = computerChoice.toUpperCase();
}

form.addEventListener("submit", (event) => { // only validate if every input has something in it.
    if (form.checkValidity()) {
        event.preventDefault();
        validateText();
    }
});