function storeLocalData(){
    const value = document.getElementById('localInput').value;
    localStorage.setItem('data', value);
    document.getElementById('localOutput').textContent = `Stored in Local Storage ${value}`;
}

function retrieveLocalData(){
    const value = document.getElementById('localInput').value;
    localStorage.getItem('data', value);
    document.getElementById('localOutput').textContent = `Retrieved from Local Storage ${value}`;
}

function clearLocalStorage(){
    localStorage.clear();
    document.getElementById('localOutput').textContent = `Local Storage cleared`;
}

function storeSessionData(){
    const value = document.getElementById('sessionInput').value;
    sessionStorage.setItem('data', value);
    document.getElementById('sessionOutput').textContent = `Stored in Local Storage ${value}`;
}

function retrieveSessionData(){
    const value = document.getElementById('sessionInput').value;
    sessionStorage.getItem('data', value);
    document.getElementById('sessionOutput').textContent = `Retrieved from Local Storage ${value}`;
}

function clearSessionStorage(){
    sessionStorage.clear();
    document.getElementById('sessionOutput').textContent = `Local Storage cleared`;
}