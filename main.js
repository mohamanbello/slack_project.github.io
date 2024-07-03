document.addEventListener('DOMContentLoaded', function () {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

        document.getElementById('currentTimeUTC').textContent = utcTime;
        document.getElementById('currentDay').textContent = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000); // Update the time every second

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate the form
        if (name && email && message) {
            document.getElementById('formMessage').textContent = 'Thank you for your message!';
            document.getElementById('formMessage').style.color = 'green';
            this.reset();
        } else {
            document.getElementById('formMessage').textContent = 'Please fill out all fields.';
            document.getElementById('formMessage').style.color = 'red';
        }
    });
});
