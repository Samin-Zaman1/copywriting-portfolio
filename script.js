document.getElementById('year').textContent = new Date().getFullYear();

const workTabs = document.querySelectorAll('[data-work-tab]');
const workPanels = document.querySelectorAll('[data-work-panel]');
const workSection = document.getElementById('work');

const showWorkPanel = (target) => {
	workTabs.forEach((item) => {
		const isActive = item.dataset.workTab === target;
		item.classList.toggle('is-active', isActive);
		item.setAttribute('aria-selected', isActive);
	});

	workPanels.forEach((panel) => {
		panel.hidden = panel.dataset.workPanel !== target;
	});
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
