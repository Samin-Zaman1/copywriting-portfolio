document.getElementById('year').textContent = new Date().getFullYear();

const workTabs = document.querySelectorAll('[data-work-tab]');
const workPanels = document.querySelectorAll('[data-work-panel]');

workTabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = tab.dataset.workTab;

		workTabs.forEach((item) => {
			const isActive = item === tab;
			item.classList.toggle('is-active', isActive);
			item.setAttribute('aria-selected', isActive);
		});

		workPanels.forEach((panel) => {
			panel.hidden = panel.dataset.workPanel !== target;
		});
	});
});
