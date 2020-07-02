// Define UI
let button = document.getElementById("guessButton");
let numberInput = document.getElementById("number");
let alert = document.getElementById('message');
let ulPast = document.getElementById("pastGuesses");
// Define function code
const alertMessage = (type, message) => {
    alert.className = type;
    alert.textContent = message;
    // setTimeout(() => {
    //     alert.classList.remove(type);
    //     alert.textContent = "";
    // }, 3000)
}

const restart = () => {
    setTimeout(() => {
        alert.innerHTML = "";
        alert.className = "";
        [...ulPast.getElementsByClassName('item')].forEach(e => e.remove());
    }, 5000)
}

let machineGuess = Math.floor(Math.random() * 100);
let times = 10;


button.addEventListener('click', () => {
    times--;
    if (times <= 0) {
        restart();
        return alertMessage("danger", `You lose !!! . The number is ${machineGuess}. Wait 5s to restart`);
    }
    let usersGuess = parseInt(document.getElementById('number').value);
    document.getElementById('number').value = "";
    if (usersGuess === machineGuess) {
        restart();
        return alertMessage("success", `Congratulations !! You guessed correctly. This is number ${machineGuess} . Wait 5s to restart`);
    } else if (usersGuess < machineGuess) {
        let li = document.createElement("li");
        li.className = 'item';
        li.textContent = usersGuess;
        ulPast.appendChild(li);
        return alertMessage("danger", `Sorry your guess is to low, guess higher. You have ${times} guesses left`)
    } else {
        let li = document.createElement("li");
        li.className = 'item';
        li.textContent = usersGuess;
        ulPast.appendChild(li);
        return alertMessage("danger", `Sorry your guess is to high, guess lower. You have ${times} guesses left`);
    }
});

numberInput.addEventListener('change', (e) => {
    let val = e.target.value;
    if (val < 0 || val > 99) {
        return alertMessage("danger", "You must enter number in range (0-99)");
    }
})