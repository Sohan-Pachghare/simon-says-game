let gameSeq = [];
let userSeq= [];
let btns = ["red", "blue", "green", "yellow"];

let level = 0;
let hiScore = 0
let isStarted = false;

let hscore = document.querySelector('p');

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(isStarted == false) {
        console.log("game started");
        isStarted = true;
        levelup();
    }
})

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    

    //random button choose
    let randIdx = Math.floor(Math.random()*4);
    let randbtn = document.querySelector(`.${btns[randIdx]}`);
    gameFlash(randbtn);
    gameSeq[level-1] = btns[randIdx];
    console.log(gameSeq); 
}
function checkAns(idx){  
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000); 
            if(level > hiScore) {
                hiScore = level;
            }
        }
    } else {
        h2.innerHTML = `Game over! Your score was ${level} <br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";

        }, 250);
         
        reset();
    }
}

function btnpress() {
    userFlash(this);
    userSeq.push(this.getAttribute("id"));
    checkAns(userSeq.length-1);
    
}

//which btn was pressed
let buttons = document.querySelectorAll(".btn");
for(btn of buttons) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    hscore.innerHTML = `Highest score is ${hiScore+1}`;   
    gameSeq = [];
    userSeq = [];
    isStarted = false;
    level  = 0;  
}

