'use strict';
const path = require('path');
const electron = require('electron');

// Prevent Electron from never exiting when an exception happens
process.on('uncaughtException', error => {
	console.error('Exception:', error);
	process.exit(1);
});

async function main() {
	const Store = (await import('./index.js')).default;

	console.log(electron.app.getPath('userData'));

	const store = new Store({cwd: 'foo'});
	store.set('unicorn', '🦄');
	console.log(store.path);

	const store2 = new Store({cwd: path.join(__dirname, 'bar')});
	store2.set('ava', '🚀');
	console.log(store2.path);

	electron.app.quit();
}

main();
