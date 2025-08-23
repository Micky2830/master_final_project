const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', function(){
    alert("Button was clicked!")
});

const doubleclickButton = document.getElementById('doubleclickButton');
doubleclickButton.addEventListener('dblclick', function(){
    alert("Button was clicked twice!")
});

const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseover', function(){
    hoverButton.style.backgroundColor = 'yellow';
});
hoverButton.addEventListener('mouseout', function(){
    hoverButton.style.backgroundColor = 'green';
});

const downButton = document.getElementById('downButton');
downButton.addEventListener('mousedown', function(){
    downButton.style.backgroundColor = 'blue';
});
downButton.addEventListener('mouseup', function(){
    downButton.style.backgroundColor = 'red';
});

const moveButton = document.getElementById('moveButton');
moveButton.addEventListener('mousemove', function(event){
    moveButton.textContent = `Mouse at (${event.clientX}, ${event.clientY})`;
})