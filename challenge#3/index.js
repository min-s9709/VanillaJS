const guessNumForm = document.querySelector("#guess-num");
const maxNumber = document.querySelector("#maximum");
const userNum = document.querySelector("#usernum");
const showGame = document.querySelector("#show");
const showResult = document.querySelector("#result");

maxNumber.onchange = function(){
    if(parseInt(maxNumber.value,10)<0){
        alert("You can't write negative number");
        maxNumber.focus();
    }
}

function handleGenerateNum(event){
    event.preventDefault();
    const randomNum =Math.ceil(Math.random()*parseInt(maxNumber.value,10)); 
    compareNum(randomNum);
}

function compareNum(randomNum){
    showGame.innerText = `you choose: ${userNum.value}, the machine chose: ${randomNum}`;
    if(parseInt(userNum.value,10)===randomNum){
        showResult.innerHTML = "<h4>You won!</h4>";
    }else{
        showResult.innerHTML = "<h4>You lost!</h4>";
    }
}

guessNumForm.addEventListener("submit", handleGenerateNum);
