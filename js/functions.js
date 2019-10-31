function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = printMessage;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}