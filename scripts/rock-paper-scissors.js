let score = JSON.parse(localStorage.getItem('score')) ||
{
  wins: 0,
  losses: 0,
  ties: 0
};

function playGame(playMove)
{
  const computerMove = pickComputerMove();
  let result = '';
  if (playMove === 'rock')
  {
    if (computerMove === 'scissors')
      result = 'You win.'
    else if (computerMove === 'paper')
      result = 'You lose.'
    else
      result = 'Tie.';

  } else if (playMove === 'paper')
  {
    if (computerMove === 'scissors')
      result = 'You lose.'
    else if (computerMove === 'paper')
      result = 'Tie.'
    else
      result = 'You win.';

  } else if (playMove === 'scissors')
  {
    if (computerMove === 'scissors')
      result = 'Tie.'
    else if (computerMove === 'paper')
      result = 'You win.'
    else
      result = 'You lose.';
  }


  if (result === 'Tie.')
    score.ties++;
  if (result === 'You win.')
    score.wins++;
  if (result === 'You lose.')
    score.losses++;



  localStorage.setItem('score', JSON.stringify(score));


  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You ${playMove} - ${computerMove} Computer`;

  updateScoreElement();
  // alert(`you pick ${playMove}. Computer pick ${computerMove}. ${result}`);
}

function updateScoreElement()
{
  document.querySelector(".js-score").innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

function pickComputerMove()
{
  const randNumber = Math.random();

  let computerMove = '';

  if (randNumber >= 0 && randNumber < 1 / 3)
  {
    computerMove = 'rock';
  }
  else if (randNumber >= 1 / 3 && randNumber < 2 / 3)
  {
    computerMove = 'paper';
  }
  else
  {
    computerMove = 'scissors';
  }

  return computerMove;
}




