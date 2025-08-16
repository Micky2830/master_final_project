document.addEventListener('DOMContentLoaded', function () {
    const participantTable = document.getElementById('participant-table');
    let participants = JSON.parse(localStorage.getItem('participants')) || [];

    function renderParticipants() {
        participantTable.innerHTML = '';
        participants.forEach((participant, index) => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${participant.name}</td>
                <td>${participant.email}</td>
                <td>${participant.message}</td>
                <td><button onclick="removeParticipant(${index})">Remove</button></td>
            `;

            participantTable.appendChild(row);
        });
    }

    window.removeParticipant = function (index) {
        participants.splice(index, 1);
        localStorage.setItem('participants', JSON.stringify(participants));
        renderParticipants();
    };

    renderParticipants();
});
