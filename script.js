const weddingDate = new Date('2027-06-27T15:00:00').getTime();

function updateCountdown() {
	const distance = weddingDate - Date.now();
	const countdowns = document.querySelectorAll('.countdown');

	if (!countdowns.length) return;

	if (distance <= 0) {
		countdowns.forEach((c) => {
			c.innerHTML = '<div><span>Today</span><p>IS THE DAY</p></div>';
		});
		return;
	}

	const day = 1000 * 60 * 60 * 24;
	const values = {
		days: Math.floor(distance / day),
		hours: Math.floor((distance % day) / (1000 * 60 * 60)),
		minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
		seconds: Math.floor((distance % (1000 * 60)) / 1000),
	};

	document.querySelectorAll('[data-unit]').forEach((el) => {
		el.textContent = values[el.dataset.unit];
	});
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

// Departures board letter tiles
document.querySelectorAll('.flap').forEach((el, n) => {
	const s = el.textContent;
	el.setAttribute('aria-label', s);
	el.textContent = '';
	[...s].forEach((c, i) => {
		const t = document.createElement('span');
		t.className = 't';
		t.setAttribute('aria-hidden', 'true');
		t.textContent = c === ' ' ? '\u00a0' : c.toUpperCase();
		t.style.animationDelay = n * 0.05 + i * 0.03 + 's';
		el.appendChild(t);
	});
});

// FAQ tabs
const faqTabs = document.querySelectorAll('.faq-tab');
faqTabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		faqTabs.forEach((t) => {
			const on = t === tab;
			t.setAttribute('aria-selected', on);
			document.getElementById(t.dataset.p).hidden = !on;
		});
	});
});
