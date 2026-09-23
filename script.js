document.getElementById('year').textContent = new Date().getFullYear();

const workTabs = document.querySelectorAll('[data-work-tab]');
const workPanels = document.querySelectorAll('[data-work-panel]');
const workSection = document.getElementById('work');

const showWorkPanel = (target) => {
	const anchor = document.querySelector('.work-tabs');
	const beforeTop = anchor ? anchor.getBoundingClientRect().top : null;

	workTabs.forEach((item) => {
		const isActive = item.dataset.workTab === target;
		item.classList.toggle('is-active', isActive);
		item.setAttribute('aria-selected', isActive);
	});

	workPanels.forEach((panel) => {
		panel.hidden = panel.dataset.workPanel !== target;
	});

	// Switching panels changes the page's total height (panels vary a lot in
	// length), which can make the browser clamp scroll position to the new,
	// shorter bottom of the page. Compensate so the tab bar stays put.
	if (anchor && beforeTop !== null) {
		const afterTop = anchor.getBoundingClientRect().top;
		const delta = afterTop - beforeTop;
		if (delta !== 0) {
			window.scrollBy(0, delta);
		}
	}
};

workTabs.forEach((tab) => {
	tab.addEventListener('click', (event) => {
		event.preventDefault();
		showWorkPanel(tab.dataset.workTab);

		if (tab.classList.contains('work-menu-link') && workSection) {
			const bounds = workSection.getBoundingClientRect();
			if (bounds.top < 0 || bounds.bottom > window.innerHeight) {
				workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	});
});
