// finding or selecting elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkBTN = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const LWmsg = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

//initializing some value
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

form.addEventListener("submit" ,function(event) {
    event.preventDefault();
    // console.log(guessingNumber.value);
    attempts++;
    if(attempts == 5){
        guessingNumber.disabled = true;
        checkBTN.disabled = true;
    }
    if(attempts < 6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = 
        `Remaining Attempts : ${totalAttempts-attempts}`;
    };
    guessingNumber.value = " ";
});

function checkResult(guessingNumber){
    // console.log(guessingNumber);
    const randomNumber = getRandomNumber(5);

    if(guessingNumber == randomNumber){
        resultText.innerHTML = 
        `You have won!!!`;
        totalWons++;
    }else{
        resultText.innerHTML = 
        `You have lost!!! Random Number was : ${randomNumber}`;
        totalLosts++;
    };

    LWmsg.innerHTML = `Won : ${totalWons} , Lost : ${totalLosts} .`;
    LWmsg.classList.add("large-text");
    cardBody.appendChild(LWmsg);

    // console.log(randomNumber);
};

function getRandomNumber(limit){
    return  Math.floor(Math.random() * limit) + 1;
};