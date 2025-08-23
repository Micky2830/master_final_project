// let name = prompt("Your Name: ");
function showMessage() {
    let msg = "Hello, "+name+" !"
    alert(msg);
}
// showMessage();

function showMsg(a,b){
    console.log("Customer Name: "+a+"\nCustomer Height: "+b);
}

// showMsg('WIlson', '180');

function calculation(a,b){
    return a*b;
}

console.log(calculation(10,12));

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Cannot divide by zero.";
            }
            return a / b;
        default:
            return "Invalid operator.";
    }
}

// let num1 = parseFloat(prompt("Enter the first number:"));
// let operator = prompt("Enter the operator (+, -, *, /):");
// let num2 = parseFloat(prompt("Enter the second number:"));

// let result = calculate(num1, num2, operator);
// alert("Result: " + result);

function increaseCharge(){
    let battery = document.getElementById("battery");
    let charge = Number(battery.textContent);
    battery.textContent = charge + 10;
}

