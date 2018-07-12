//event listeners.
document.addEventListener('DOMContentLoaded', () => {
	if (typeof fin != 'undefined') {
		fin.desktop.main(onMain);
	} else {
		ofVersion.innerText =
			'OpenFin is not available - you are probably running in a browser.';
	}
});

//once the DOM has loaded and the OpenFin API is ready
function onMain() {
	const createApp1Btn = document.querySelector('#create-app');

	createApp1Btn.addEventListener('click', () => {
		// creates app when button is clicked
		const app = new fin.desktop.Application({
			name: 'app',
			uuid: 'app-uuid',
			autoShow: true,
			defaultHeight: 300,
			defaultWidth: 400,
			url: 'http://localhost:5555/app.html',
			saveWindowState: false
		}, () => {
			app.run();
		});
	});
}