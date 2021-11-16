function random() {
	let randomNumber = Math.floor(Math.random() * 11)
	let userAnswer = prompt("Dime un número del 0 al 10.")
	if (userAnswer == randomNumber) {
		alert(`Felicidades, sí era el ${userAnswer}`);
	}
	else { alert(`Error, el numero correcto era el ${randomNumber}`) }
}
