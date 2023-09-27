let pScore = 0;
    let cScore = 0;
    let roundsLeft = 5;
    const confettiCanvas = document.getElementById('confettiNew');

    const popup = document.querySelector(".popup");
    const closePopupButton = document.getElementById("close-popup");
    const winnerTextValue = document.getElementById("winnerValue")

const game = () => {

    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
        updateRoundsLeft(); 
      });
    };
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          if (roundsLeft > 0) {
            if (this.classList.contains("rock") || this.classList.contains("paper") || this.classList.contains("scissors")) {
              roundsLeft--;
              updateRoundsLeft();
            }

          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            compareHands(this.textContent, computerChoice);
            playerHand.src = `./Assets/${this.textContent}.png`;
            computerHand.src = `./Assets/${computerChoice}.png`;
          }, 2000);
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        }
        });
      });
    };
   
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
    popup.style.display = "none";
    const showPopup = () => {
setTimeout(() => {

  if ((pScore > 0 || cScore > 0) && roundsLeft === 0) {
    updateScore();
    if(pScore > cScore) {
      winnerTextValue.textContent = "Player Wins";
    }
    else if(pScore < cScore) {
      winnerTextValue.textContent = "Computer Wins"
    }
    else if(pScore === cScore) {
      winnerTextValue.textContent = "It is a Tie"
    }
    else {
      winnerTextValue.textContent = ""
    }
    popup.style.display = "block";
  }
  // updateScore()

},2000)
    };
    
    closePopupButton.addEventListener("click", () => {
      popup.style.display = "none";
    });



    const updateRoundsLeft = () => {
      const roundsLeftElement = document.querySelector(".rounds-left p");
      roundsLeftElement.textContent = roundsLeft;
  
      if (roundsLeft === 0) {
        const options = document.querySelectorAll(".options button");
        options.forEach(option => {
          option.disabled = true;
        });
        
  
        setTimeout(() => {
          if ((pScore > cScore) && roundsLeft === 0) {
            confettiCanvas.classList.remove('confetti-head');
            confettiCanvas.classList.add('confetti-block');
            winnerTextValue.textContent = "Player Wins!";
            showPopup();
          } else if ((cScore > pScore) && roundsLeft === 0) {
            winnerTextValue.textContent = "Computer Wins!";
            showPopup();
          } else if (pScore === cScore && roundsLeft === 0) {
            confettiCanvas.classList.remove('confetti-block');
            winnerTextValue.textContent = "It's a Tie!";
            showPopup();
          }

          setTimeout(() => {
            confettiCanvas.classList.remove('confetti-block');
            confettiCanvas.classList.add('confetti-head');
          }, 5000);

          closePopupButton.addEventListener("click", () => {
            resetGame();
      pScore = 0; 
      cScore = 0; 
      updateScore();
          });
          
        },2100)
      }
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      const winner = document.querySelector(".winner");
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      updateScore();
    };
  
    //Is call all the inner function
    startGame();
    playMatch();


    const resetGame = () => {
      pScore = 0;
      cScore = 0;
      roundsLeft = 5;
      popup.style.display = "none";

      
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      playerHand.src = "./assets/rock.png"; 
      computerHand.src = "./assets/rock.png";
      const options = document.querySelectorAll(".options button");
      options.forEach((option) => {
        option.disabled = false;
      });
  
      document.querySelector(".winner").textContent = "Choose an option";
      updateRoundsLeft();
    };
  
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", () => {
      resetGame();
      pScore = 0; 
      cScore = 0; 
      updateScore();
    });
    // closePopupButton.addEventListener("click", () => {
    //   resetGame();
    // });

  

    //ANimation

      if(pScore > cScore && roundsLeft === 0) {
  
        confettiCanvas.classList.remove('confetti-head')
        confettiCanvas.classList.add('confetti-block')
      }
    
  };
  
  //start the game function
  game();



