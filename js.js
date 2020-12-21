





let gamesPlayed=0;
let gamesWon=0;
let gamesLost=0;



let buttons= document.querySelectorAll(".btn .btn-outline-primary");


buttons.forEach(addEventListener("click",playerChoice));

function playerChoice(event){

let buttonPressed= event.target;
let userChoice= buttonPressed.value

let options= ["rock", "paper", "scissors"]
let randChoice= options[Math.floor(Math.random()*options.length)];
let computerPlay= randChoice;

if (userChoice==='rock' && computerPlay==='rock'){

    let winnerAnnounce= document.getElementById("gameResults");
    winnerAnnounce.innerHTML=""
    let rockImage= document.createElement("img");
    rockImage.setAttribute("src", "rock.jpg");
  rockImage.setAttribute("width", "100");
  rockImage.setAttribute("height", "100");
  rockImage.setAttribute("class", "img");

  let rockImage2= document.createElement("img");
    rockImage2.setAttribute("src", "computerRock.png");
  rockImage2.setAttribute("width", "100");
  rockImage2.setAttribute("height", "100");
  rockImage2.setAttribute("class", "img");



  let text=document.createElement("h4");
  text.innerText="You and the computer both chose rock, its a draw!"
let brek=document.createElement("br")
winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(rockImage);
  winnerAnnounce.appendChild(rockImage2);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(text);

  gamesPlayed++
}
else if (userChoice==='rock' && computerPlay==='scissors'){

    let winnerAnnounce= document.getElementById("gameResults");
    winnerAnnounce.innerHTML=""
    let rockImage= document.createElement("img");
    rockImage.setAttribute("src", "rock.jpg");
  rockImage.setAttribute("width", "100");
  rockImage.setAttribute("height", "100");
  rockImage.setAttribute("class", "img");


    let scissorsImage2= document.createElement("img");
    scissorsImage2.setAttribute("src", "computerScissors.jpg");
    scissorsImage2.setAttribute("width", "100");
    scissorsImage2.setAttribute("height", "100");
    scissorsImage2.setAttribute("class", "img");



  let text=document.createElement("h4");
  text.innerText="You win, the computer chose scissors!'"
let brek=document.createElement("br")
winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(rockImage);
  winnerAnnounce.appendChild(scissorsImage2);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(text);

  gamesPlayed++
  gamesWon++


}
else if (userChoice==='rock' && computerPlay==='paper'){


    let winnerAnnounce= document.getElementById("gameResults");
    winnerAnnounce.innerHTML=""

    let rockImage= document.createElement("img");
    rockImage.setAttribute("src", "rock.jpg");
  rockImage.setAttribute("width", "100");
  rockImage.setAttribute("height", "100");
  rockImage.setAttribute("class", "img");

    let paperImage2= document.createElement("img");
    paperImage2.setAttribute("src", "computerPaper.jpg");
    paperImage2.setAttribute("width", "100");
    paperImage2.setAttribute("height", "100");
    paperImage2.setAttribute("class", "img");



  let text=document.createElement("h4");
  text.innerText=    "You lose, the computer chose paper!"
let brek=document.createElement("br")
winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(rockImage);
  winnerAnnounce.appendChild(paperImage2);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(text);

gamesPlayed++
gamesLost++

}


else if (userChoice==='scissors' && computerPlay==='rock'){

    let winnerAnnounce= document.getElementById("gameResults");
    winnerAnnounce.innerHTML=""

        let scissorsImage= document.createElement("img");
    scissorsImage.setAttribute("src", "scissors.png");
    scissorsImage.setAttribute("width", "100");
    scissorsImage.setAttribute("height", "100");
    scissorsImage.setAttribute("class", "img");

  let rockImage2= document.createElement("img");
    rockImage2.setAttribute("src", "computerRock.png");
  rockImage2.setAttribute("width", "100");
  rockImage2.setAttribute("height", "100");
  rockImage2.setAttribute("class", "img");



  let text=document.createElement("h4");
  text.innerText="You lose, the computer chose rock!"
let brek=document.createElement("br")
winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(scissorsImage);
  winnerAnnounce.appendChild(rockImage2);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(text);


    gamesPlayed++
    gamesLost++
}
else if (userChoice==='scissors' && computerPlay==='scissors'){

    let winnerAnnounce= document.getElementById("gameResults");
    winnerAnnounce.innerHTML=""

    let scissorsImage= document.createElement("img");
    scissorsImage.setAttribute("src", "scissors.png");
    scissorsImage.setAttribute("width", "100");
    scissorsImage.setAttribute("height", "100");
    scissorsImage.setAttribute("class", "img");

    let scissorsImage2= document.createElement("img");
    scissorsImage2.setAttribute("src", "computerScissors.jpg");
    scissorsImage2.setAttribute("width", "100");
    scissorsImage2.setAttribute("height", "100");
    scissorsImage2.setAttribute("class", "img");



  let text=document.createElement("h4");
  text.innerText="You and the computer both chose scissors, its a draw!"
let brek=document.createElement("br")
winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(scissorsImage);
  winnerAnnounce.appendChild(scissorsImage2);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(text);

  gamesPlayed++

}
else if (userChoice==='scissors' && computerPlay==='paper'){


    let winnerAnnounce= document.getElementById("gameResults");
    winnerAnnounce.innerHTML=""

    let scissorsImage= document.createElement("img");
    scissorsImage.setAttribute("src", "scissors.png");
    scissorsImage.setAttribute("width", "100");
    scissorsImage.setAttribute("height", "100");
    scissorsImage.setAttribute("class", "img");

    let paperImage2= document.createElement("img");
    paperImage2.setAttribute("src", "computerPaper.jpg");
    paperImage2.setAttribute("width", "100");
    paperImage2.setAttribute("height", "100");
    paperImage2.setAttribute("class", "img");



  let text=document.createElement("h4");
  text.innerText="You win, the computer chose paper!"
let brek=document.createElement("br")
winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(scissorsImage);
  winnerAnnounce.appendChild(paperImage2);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(text);

  gamesPlayed++
  gamesWon++
  
}



else if (userChoice==='paper' && computerPlay==='rock'){


    let winnerAnnounce= document.getElementById("gameResults");
    winnerAnnounce.innerHTML=""

    let paperImage= document.createElement("img");
    paperImage.setAttribute("src", "paper.jpg");
    paperImage.setAttribute("width", "100");
    paperImage.setAttribute("height", "100");
    paperImage.setAttribute("class", "img");

    let rockImage2= document.createElement("img");
    rockImage2.setAttribute("src", "computerRock.png");
  rockImage2.setAttribute("width", "100");
  rockImage2.setAttribute("height", "100");
  rockImage2.setAttribute("class", "img");



  let text=document.createElement("h4");
  text.innerText="You win, the computer chose rock!"
let brek=document.createElement("br")
winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(paperImage);
  winnerAnnounce.appendChild(rockImage2);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(text); 

  gamesWon++
  gamesPlayed++


}
else if (userChoice==='paper' && computerPlay==='scissors'){


    let winnerAnnounce= document.getElementById("gameResults");
    winnerAnnounce.innerHTML=""

    let paperImage= document.createElement("img");
    paperImage.setAttribute("src", "paper.jpg");
    paperImage.setAttribute("width", "100");
    paperImage.setAttribute("height", "100");
    paperImage.setAttribute("class", "img");

    let scissorsImage2= document.createElement("img");
    scissorsImage2.setAttribute("src", "computerScissors.jpg");
    scissorsImage2.setAttribute("width", "100");
    scissorsImage2.setAttribute("height", "100");
    scissorsImage2.setAttribute("class", "img");



  let text=document.createElement("h4");
  text.innerText="You lose, the computer chose scissors!"
let brek=document.createElement("br")
winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(paperImage);
  winnerAnnounce.appendChild(scissorsImage2);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(text); 
    
gamesPlayed++
gamesLost++


}
else if (userChoice==='paper' && computerPlay==='paper'){

    let winnerAnnounce= document.getElementById("gameResults");
    winnerAnnounce.innerHTML=""

    let paperImage= document.createElement("img");
    paperImage.setAttribute("src", "paper.jpg");
    paperImage.setAttribute("width", "100");
    paperImage.setAttribute("height", "100");
    paperImage.setAttribute("class", "img");

    let paperImage2= document.createElement("img");
    paperImage2.setAttribute("src", "computerPaper.jpg");
    paperImage2.setAttribute("width", "100");
    paperImage2.setAttribute("height", "100");
    paperImage2.setAttribute("class", "img");

    
  let text=document.createElement("h4");
  text.innerText="You and the computer both chose paper, its a draw!"
let brek=document.createElement("br")
winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(paperImage);
  winnerAnnounce.appendChild(paperImage2);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(brek);
  winnerAnnounce.appendChild(text); 

  gamesPlayed++

}

if (gamesWon==5){

    let gameCon= document.getElementById("gameContainer");
    gameCon.innerHTML="";
  gameCon.textContent= 'You reach 5 wins first! You are the champion!!  Press the reset button to play again.'; 


}


else if(gamesLost==5) {    
    
    let gameCon= document.getElementById("gameContainer");
gameCon.innerHTML="";
gameCon.textContent= 'You lose! Computer won 5 games, try again.  Press the reset button to play again.';    
} 


let gameStats= document.getElementById("score");

gameStats.textContent=`Games played: ${gamesPlayed} Games won: ${gamesWon} Games lost: ${gamesLost}`


} 
 






