const elkfact = document.getElementById('elk-facts');
elkfact.style.border = "2px solid brown";

const facts = document.getElementsByClassName("fact");
console.log(facts.length);
for (let fact of facts){
    fact.style.color = "darkgreen";
}

const intro = document.querySelector('.intro');
intro.textContent = "Elk are majestic creatures of the forest";


const elkfactElement = document.getElementById('elk-facts');
console.log("innerHTML: ", elkfactElement.innerHTML)
console.log("textContent: ", elkfactElement.textContent)
