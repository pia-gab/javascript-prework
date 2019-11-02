
let randomNumber = Math.floor(Math.random() * 3 + 1);

function getMoveName (argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else if  (argMoveId == 2){
	return 'papier';
		}
	else if  (argMoveId == 3){
	return 'nożyce';
		}
	else {
	return 'nie ma takiego ruchu';
	}
	}
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
	computerMove = 'papier';
}
else{
	computerMove = 'nożyce';
}
*/
printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = displayResult(argComputerMove, argPlayerMove);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2'){
	playerMove == 'papier';
}
else {
	playerMove == 'nożyce';
}
*/
printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
if( argcomputerMove == 'kamień' && argplayerMove == 'papier'){
	printMessage('Ty wygrywasz!');
 }
else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
}
else if( argcomputerMove == 'papier' && argPlayerMove == 'nożyce'){
	printMessage('Ty wygrywasz!');
}
else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
	printMessage('Remis!');
  }
else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
	printMessage('Remis!');
  }
else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
	printMessage('Remis!');
  }
else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
	printMessage('y all loosers!');
  }
else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
	printMessage('y all loosers!');
  }
else if( argComputerMove == 'papier' && argplayerMove == 'kamień'){
	printMessage('y all loosers!');
  }
else {
	printMessage('nie ma takiego ruchu');
}
}

console.log('moves:', argComputerMove, argPlayerMove)
