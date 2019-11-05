function printMessage(playerMove){
	var div = document.createElement('div');
	div.innerHTML = playerMove;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}