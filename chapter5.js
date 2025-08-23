function surpriseMessage() {
    console.log("SUPPPRISEEEEE!")
}

// 5000 milliseconds = 5 second
// setTimeout(surpriseMessage, 5000);

// setInterval(surpriseMessage, 5000);

function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

// usage:
printNumbers(5, 10);
