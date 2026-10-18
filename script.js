const weddingDate = new Date('2027-06-27T15:00:00').getTime();

function updateCountdown() {
	const distance = weddingDate - Date.now();
	const countdown = document.querySelector('.countdown');

	if (!countdown) return;

	if (distance <= 0) {
		countdown.innerHTML = '<div><span>Today</span><p>IS THE DAY</p></div>';
		return;
	}

	const day = 1000 * 60 * 60 * 24;

	document.getElementById('days').textContent = Math.floor(distance / day);

	document.getElementById('hours').textContent = Math.floor(
		(distance % day) / (1000 * 60 * 60),
	);

	document.getElementById('minutes').textContent = Math.floor(
		(distance % (1000 * 60 * 60)) / (1000 * 60),
	);

	document.getElementById('seconds').textContent = Math.floor(
		(distance % (1000 * 60)) / 1000,
	);
}

updateCountdown();

setInterval(updateCountdown, 1000);

// RSVP form

const form = document.getElementById('rsvp-form');

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const name = document.getElementById('name').value.trim();

		const attending = document.getElementById('attendance').value === 'yes';

		document.getElementById('rsvp-message').textContent = attending
			? `Thank you, ${name}! We can't wait to celebrate with you.`
			: `Thank you for letting us know, ${name}. We'll miss you!`;

		form.reset();
	});
}
