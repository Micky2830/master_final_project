charge = 0;
const changeText = () => {
    const p = document.querySelector("p");
 
    if(charge<100){
        charge+=10;
        p.textContent = `Charge ${charge}%`;

    }else{
        p.textContent = "Charge Completed!";
    }
};