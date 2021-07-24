function random() {
	let randomNumber = Math.floor(Math.random() * 11)
	console.log(randomNumber)
	let userAnswer = prompt("Dime un número del 0 al 10.")

	if (userAnswer == randomNumber) {
		alert("Le atinaste perro, sí era el " + userAnswer);
	} 

	else {alert("No le atinaste mamahuevazo, era el " + randomNumber)}
}
