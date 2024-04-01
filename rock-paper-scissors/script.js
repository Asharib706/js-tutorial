let userMove;
let computer;
let result;
let score =  {
  win: 0,
  lose: 0,
  tie: 0,
}
let savedscore= JSON.parse(localStorage.getItem('score'));

if (savedscore){
  score=savedscore;
}
updatescore();

function resetScore() {
  score = {
    win: 0,
    lose: 0,
    tie: 0
  }
  updatescore();
  localStorage.removeItem('score')
}

function computerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < (1 / 3)) {
    return 'rock';
  } else if (randomNumber >= (1 / 3) && randomNumber < (2 / 3)) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function match(userMove) {
  computer = computerMove();


  if (userMove === "scissors") {
    if (computer === 'rock') {
      result = "You lose.";
    } else if (computer === 'paper') {
      result = "You win.";
    } else if (computer === "scissors") {
      result = "Tie.";
    }
  } else if (userMove === "rock") {
    if (computer === 'rock') {
      result = "Tie.";
    } else if (computer === 'paper') {
      result = "You lose.";
    } else if (computer === "scissors") {
      result = "You win.";
    }
  } else if (userMove === "paper") {
    if (computer === 'rock') {
      result = "You win.";
    } else if (computer === 'paper') {
      result = "Tie.";
    } else if (computer === "scissors") {
      result = "You lose.";
    }
  }
  if (result === 'You win.') {
    score.win += 1;
  } else if (result === 'You lose.') {
    score.lose += 1;
  } else if (result === 'Tie.') {
    score.tie += 1;
  }
  // alert(`You picked ${userMove}. Computer picked ${computer}. ${result}\nWins: ${score.win}, Losses: ${score.lose}, Tie: ${score.tie}`);
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector(".js-moves").innerHTML = moves(userMove,computer);
  updatescore();
  localStorage.setItem('score', JSON.stringify(score));

}

function moves(userMove,computer){
  return `You <img src="game-icon/${userMove}-emoji.png" class="move-icon"> <img src="game-icon/${computer}-emoji.png" class="move-icon"> Computer`
}

function updatescore(){
  document.querySelector('.js-score').innerHTML = `Win:${score.win}, Lose:${score.lose}, Tie:${score.tie}`;
}