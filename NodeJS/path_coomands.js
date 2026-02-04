import path from 'path';

function joinExample() {
	console.log('join:', path.join('tmp', 'files', 'notes.txt'));
}

function basenameExample() {
	console.log('basename:', path.basename('/tmp/files/notes.txt'));
}

function dirnameExample() {
	console.log('dirname:', path.dirname('/tmp/files/notes.txt'));
}

function extnameExample() {
	console.log('extname:', path.extname('archive.tar.gz'));
}

function resolveExample() {
	console.log('resolve:', path.resolve('tmp', 'files'));
}

function isAbsoluteExample() {
	console.log('isAbsolute (/tmp):', path.isAbsolute('/tmp'));
	console.log('isAbsolute (C:\\):', path.isAbsolute('C:\\'));
}

function normalizeExample() {
	console.log('normalize:', path.normalize('foo/bar//baz/../qux'));
}

function relativeExample() {
	console.log('relative:', path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
}

function parseFormatExample() {
	const p = path.parse('/home/user/dir/file.txt');
	console.log('parse:', p);
	console.log('format (roundtrip):', path.format(p));
}

function main() {
	joinExample();
	basenameExample();
	dirnameExample();
	extnameExample();
	resolveExample();
	isAbsoluteExample();
	normalizeExample();
	relativeExample();
	parseFormatExample();
}

main();

