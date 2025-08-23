const example1 = document.getElementById("example1");
example1.style.backgroundColor = 'lightblue';

const example2 = document.querySelector('.example:nth-child(2)');
example2.style.backgroundColor = 'lightgreen';

const example3 = document.getElementsByTagName("div")
for(let div of example3){
    div.style.borderColor = "red";
}

const example4 = document.getElementsByClassName("example");
for(let div of example4){
    div.style.borderWidth = "5px"
}

const example5 = document.getElementById("example5");
example5.innerHTML = "<strong>Example 5: innerHTML</strong>";

const example6 = document.getElementById("example6");
example6.outerHTML = '<strong>Example 6: outerHTML</strong>';

const example7 = document.getElementById("example7");
example7.textContent = "<strong>Example 7: change ME !</strong>";
