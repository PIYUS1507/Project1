// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    const appointmentList = document.getElementById('appointment-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const date = formData.get('date');
        const time = formData.get('time');
        const description = formData.get('description');

        const appointmentItem = document.createElement('div');
        appointmentItem.classList.add('appointment-item');
        appointmentItem.innerHTML = `
            <h3>${date} - ${time}</h3>
            <p>${description}</p>
        `;
        appointmentList.appendChild(appointmentItem);

        form.reset();
    });
});
