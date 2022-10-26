console.log("HELLO SIERRA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
const number = Math.floor(Math.random() * 100 + 1)
console.log(number)

document.getElementById("word").onclick = function checkNumber() {

	guess = document.getElementById("guess").value

	if(guess > number){
		console.log(guess)
		console.log("too high")
	}
	else if (guess < number){
		console.log(guess)
		console.log("too low")
	}
	else{
		console.log("correct")
	}
}
