{
	function playGame(playerInput){
		const stone= "kamień";
		const scissors = "nożyce";
		const paper = "papier";
		clearMessages();
		const randomNumber = Math.floor(Math.random() * 3 + 1);
		const getMoveName = function (argMoveId) {
			if (argMoveId == 1) {
				return stone;
			} else if (argMoveId == 2) {
				return paper;
			} else if (argMoveId == 3) {
				return scissors;
			} else {
				return 'nie ma takiego ruchu';
			}
		}
		const computerMove = getMoveName(randomNumber);
		printMessage('Mój ruch to: ' + computerMove);
		const displayResult = function (argComputerMove, argPlayerMove){
			printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
			if( argComputerMove ==  stone && argPlayerMove == paper){
				printMessage('Ty wygrywasz!');
			} else if (argComputerMove == scissors && argPlayerMove == stone){
				printMessage('Ty wygrywasz!');
			} else if( argComputerMove == paper && argPlayerMove == scissors){
				printMessage('Ty wygrywasz!');
			} else if (argComputerMove == stone && argPlayerMove == stone){
				printMessage('Remis!');
			} else if (argComputerMove == paper && argPlayerMove == paper){
				printMessage('Remis!');
			} else if (argComputerMove == scissors && argPlayerMove == scissors){
				printMessage('Remis!');
			} else if ( argComputerMove == stone && argPlayerMove == scissors){
				printMessage('y all loosers!');
			} else if ( argComputerMove == scissors && argPlayerMove == paper){
				printMessage('y all loosers!');
			} else if ( argComputerMove == paper && argPlayerMove == stone){
				printMessage('y all loosers!');
			} else {
				printMessage('nie ma takiego ruchu');
			}
		}
		const playerMove = getMoveName(playerInput);
		printMessage('Twój ruch to: ' + playerMove);
		displayResult(computerMove, playerMove);
	}
	document.getElementById('play-rock').addEventListener('click', function(){
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function(){
		playGame(2);
	});
	document.getElementById('play-scissors').addEventListener('click', function(){
		playGame(3);
	});
}