const increment = document.querySelector("#increment")
const decrease = document.querySelector("#decrease")
const save = document.querySelector("#save")
const text = document.querySelector("#text")
const lastInputs = document.querySelector("#last-inputs")
const total = document.querySelector("#total")
let sum = 0
let tot = 0
increment.addEventListener("click", function(){
	sum++
	text.innerText = `Counter: ${sum}`
})

decrease.addEventListener("click", function(){
	sum--
	text.innerText = `Counter: ${sum}`
})

save.addEventListener("click", function(){
	lastInputs.innerText += ` ${sum}`
	tot += sum
	sum = 0
	total.innerText = `Total: ${tot}`
})