document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    const participants = JSON.parse(localStorage.getItem('participants')) || [];

    function showAlert(message, success=true){
        const alertBox = document.createElement('div');
        alertBox.textContent = message;
        alertBox.className = `alert ${success ? 'success' : 'error'}`;
        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.classList.add('fade-out');
            setTimeout(() => alertBox.remove(), 500);
        }, 3000);
    }

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message){
            participants.push({name, email, message});
            localStorage.setItem('participants', JSON.stringify(participants));

            showAlert('Thank you for your message!');
            form.reset();
        } else{
            showAlert('Please fill in all fields.');
        }
    });
})