// Site navigation: highlights the current page in the menus, runs the phone
// "More" sheet, and on the
// home page shows one section at a time (Home, Our Celebrations, Getting Here, FAQ, RSVP) instead
// of one long scroll. Each section has its own address, e.g. index.html#travel,
// so the browser back button and shared links work as expected.
(function () {
	const page = document.body.dataset.page;
	const views = document.querySelectorAll('[data-view]');

	// Old links and anchors that live inside a section.
	const aliases = { '': 'home', story: 'home', welcome: 'home' };

	// Phone "More" sheet: Food, What to Wear, Mauritius 101 and FAQ.
	const moreBtn = document.querySelector('.tab-more');
	const sheet = document.getElementById('more-sheet');
	const MORE = ['food', 'wear', 'tips', 'faq'];

	function setMore(open) {
		if (!moreBtn || !sheet) return;
		sheet.hidden = !open;
		moreBtn.setAttribute('aria-expanded', String(open));
		if (open) {
			const first = sheet.querySelector('a');
			if (first) first.focus({ preventScroll: true });
		}
	}
	if (moreBtn && sheet) {
		moreBtn.addEventListener('click', () => setMore(sheet.hidden));
		sheet.addEventListener('click', (e) => {
			if (e.target.closest('[data-close-more], a')) setMore(false);
		});
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && !sheet.hidden) {
				setMore(false);
				moreBtn.focus();
			}
		});
		// Close it if the screen is widened past phone size.
		window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => e.matches && setMore(false));
	}

	function setActive(key) {
		document.querySelectorAll('[data-nav]').forEach((a) => {
			if (a.dataset.nav === key) a.setAttribute('aria-current', 'page');
			else a.removeAttribute('aria-current');
		});
		if (moreBtn) moreBtn.classList.toggle('is-current', MORE.includes(key));
	}

	if (page !== 'home' || !views.length) {
		setActive(page);
		return;
	}

	document.documentElement.classList.add('has-views');
	const names = new Set([...views].map((v) => v.dataset.view));

	function show(first) {
		const hash = decodeURIComponent(location.hash.slice(1));
		const name = names.has(hash) ? hash : aliases[hash] || 'home';
		views.forEach((v) => {
			v.hidden = v.dataset.view !== name;
		});
		setActive(name);

		// A link to something inside a section (e.g. #rsvp) scrolls to it;
		// a link to a whole section starts at the top.
		const target = hash && !names.has(hash) ? document.getElementById(hash) : null;
		if (target) target.scrollIntoView();
		else if (!first) window.scrollTo(0, 0);

		const titles = { home: '', itinerary: 'Our Celebrations', travel: 'Getting Here', faq: 'FAQ', rsvp: 'RSVP' };
		document.title = (titles[name] ? titles[name] + ' | ' : '') + 'Sonali & Piers | Mauritius Wedding';
	}

	window.addEventListener('hashchange', () => show(false));
	show(true);
})();
