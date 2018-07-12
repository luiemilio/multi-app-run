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
	const subApp1 = new fin.desktop.Application({
		name: 'sub-app1',
		uuid: 'sub-app1-uuid',
		autoShow: true,
		defaultTop: 400,
		defaultHeight: 200,
		defaultWidth: 300,
		defaultLeft: 0,
		saveWindowState: false,
		url: 'about:blank'
	}, () => subApp1.run(), err => console.log(err));

	const subApp2 = new fin.desktop.Application({
		name: 'sub-app2',
		uuid: 'sub-app2-uuid',
		autoShow: true,
		defaultHeight: 200,
		defaultWidth: 300,
		defaultTop: 400,
		defaultLeft: 300,
		saveWindowState: false,
		url: 'about:blank'
	}, () => subApp2.run(), err => console.log(err));

	const subApp3 = new fin.desktop.Application({
		name: 'sub-app3',
		uuid: 'sub-app3-uuid',
		autoShow: true,
		defaultHeight: 200,
		defaultWidth: 300,
		defaultTop: 400,
		defaultLeft: 600,
		saveWindowState: false,
		url: 'about:blank'
	}, () => subApp3.run(), err => console.log(err));

	const subApp4 = new fin.desktop.Application({
		name: 'sub-app4',
		uuid: 'sub-app4-uuid',
		autoShow: true,
		defaultHeight: 200,
		defaultWidth: 300,
		defaultTop: 400,
		defaultLeft: 900,
		saveWindowState: false,
		url: 'about:blank'
	}, () => subApp4.run(), err => console.log(err));

	const subApp5 = new fin.desktop.Application({
		name: 'sub-app5',
		uuid: 'sub-app5-uuid',
		autoShow: true,
		defaultHeight: 200,
		defaultWidth: 300,
		defaultTop: 400,
		defaultLeft: 1200,
		saveWindowState: false,
		url: 'about:blank'
	}, () => subApp5.run(), err => console.log(err));

	const subApp6 = new fin.desktop.Application({
		name: 'sub-app6',
		uuid: 'sub-app6-uuid',
		autoShow: true,
		defaultHeight: 200,
		defaultWidth: 300,
		defaultTop: 600,
		defaultLeft: 0,
		saveWindowState: false,
		url: 'about:blank'
	}, () => subApp6.run(), err => console.log(err));

	const subApp7 = new fin.desktop.Application({
		name: 'sub-app7',
		uuid: 'sub-app7-uuid',
		autoShow: true,
		defaultHeight: 200,
		defaultWidth: 300,
		defaultTop: 600,
		defaultLeft: 300,
		saveWindowState: false,
		url: 'about:blank'
	}, () => subApp7.run(), err => console.log(err));

	const subApp8 = new fin.desktop.Application({
		name: 'sub-app8',
		uuid: 'sub-app8-uuid',
		autoShow: true,
		defaultHeight: 200,
		defaultWidth: 300,
		defaultTop: 600,
		defaultLeft: 600,
		saveWindowState: false,
		url: 'about:blank'
	}, () => subApp8.run(), err => console.log(err));

	const subApp9 = new fin.desktop.Application({
		name: 'sub-app9',
		uuid: 'sub-app9-uuid',
		autoShow: true,
		defaultHeight: 200,
		defaultWidth: 300,
		defaultTop: 600,
		defaultLeft: 900,
		saveWindowState: false,
		url: 'about:blank'
	}, () => subApp9.run(), err => console.log(err));

	const subApp10 = new fin.desktop.Application({
		name: 'sub-app10',
		uuid: 'sub-app10-uuid',
		autoShow: true,
		defaultHeight: 200,
		defaultWidth: 300,
		defaultTop: 600,
		defaultLeft: 1200,
		saveWindowState: false,
		url: 'about:blank'
	}, () => subApp10.run(), err => console.log(err));
}