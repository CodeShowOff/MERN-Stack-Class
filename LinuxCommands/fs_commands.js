import fs from 'fs/promises'; // Use the promise-based API

async function createFile() {
    try {
        await fs.writeFile('example.txt', 'Hello World!');
        console.log("File has been created");
    } catch (err) {
        console.log("There is an error!", err);
    }
}

async function appendToFile(text) {
    try {
        await fs.appendFile('example.txt', text);
        console.log('Content appended to example.txt');
    } catch (err) {
        console.log('Append error:', err);
    }
}

async function copyFileTo(destPath) {
    try {
        await fs.copyFile('example.txt', destPath);
        console.log(`example.txt copied to ${destPath}`);
    } catch (err) {
        console.log('Copy error:', err);
    }
}

async function renameFile(newName) {
    try {
        await fs.rename('example.txt', newName);
        console.log(`example.txt renamed to ${newName}`);
    } catch (err) {
        console.log('Rename error:', err);
    }
}

async function unlinkFile() {
    try {
        await fs.unlink('example.txt');
        console.log('example.txt has been deleted');
    } catch (err) {
        console.log('Unlink error:', err);
    }
}

async function main() {
    await createFile();
    await appendToFile('\nAppended line.');
    await copyFileTo('example-copy.txt');
    await renameFile('example-renamed.txt');
    // Uncomment the next line if you want to delete the file
    // await unlinkFile();
}

main();