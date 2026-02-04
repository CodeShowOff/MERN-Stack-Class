import os from 'os';

function platformInfo() {
	console.log('Platform:', os.platform());
	console.log('OS type:', os.type());
	console.log('OS release:', os.release());
}

function cpuInfo() {
	const cpus = os.cpus();
	console.log('CPU count:', cpus.length);
	if (cpus.length > 0) console.log('First CPU model:', cpus[0].model);
}

function memInfo() {
	console.log('Total memory (bytes):', os.totalmem());
	console.log('Free memory (bytes):', os.freemem());
}

function uptimeInfo() {
	console.log('System uptime (seconds):', os.uptime());
}

function userInfo() {
	try {
		console.log('User info:', os.userInfo());
	} catch (err) {
		console.log('User info not available:', err.message);
	}
	console.log('Home directory:', os.homedir());
}

function eolInfo() {
	console.log('End-of-line marker (visible as hex):', Buffer.from(os.EOL).toString('hex'));
}

function main() {
	platformInfo();
	cpuInfo();
	memInfo();
	uptimeInfo();
	userInfo();
	eolInfo();
}

main();

