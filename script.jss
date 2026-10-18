// Wedding countdown

const weddingDate = new Date('June 27, 2027 16:00:00').getTime();

function updateCountdown() {
	const now = new Date().getTime();

	const distance = weddingDate - now;

	if (distance <= 0) {
		document.querySelector('.countdown').innerHTML =
			'<h2>Today is the day!</h2>';

		return;
	}

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));

	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);

	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById('days').textContent = days;
	document.getElementById('hours').textContent = hours;
	document.getElementById('minutes').textContent = minutes;
	document.getElementById('seconds').textContent = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);

// RSVP form

const form = document.getElementById('rsvp-form');

if (form) form.addEventListener('submit', function (event) {
	event.preventDefault();

	const name = document.getElementById('name').value;

	const attendance = document.getElementById('attendance').value;

	const message = document.getElementById('rsvp-message');

	if (attendance === 'yes') {
		message.textContent = `Thank you, ${name}! We can't wait to celebrate with you.`;
	} else {
		message.textContent = `Thank you for letting us know, ${name}. We'll miss you!`;
	}

	form.reset();
});
