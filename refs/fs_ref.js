const fs = require('fs');
const path = require('path');

// File System

fs.mkdir(path.join(__dirname, 'notes'), err => { // create notes folder
	if (err) {
		throw new Error(err);
	}
	console.log('The folder was created');
})

fs.writeFile(
	path.join(__dirname, 'notes', 'mynotes.txt'), 	//create new file
	'Hello world',									// add the content to the file
	(err) => {
		if (err) throw err
		console.log('The file was created');		//update file by adding new content

		fs.appendFile(																
			path.join(__dirname, 'notes', 'mynotes.txt'),
			' from append file',
			(err) => {
				if (err) throw err
				console.log('The file was updated');
			}
		)
		fs.readFile(									//reading file
			path.join(__dirname, 'notes', 'mynotes.txt'),
			'utf-8',									//coding to utf-8
			(err, data) => {
				if (err) throw err
				//console.log(Buffer.from(data).toString());
				console.log(data);	
			}
		)
	}
)

fs.rename(
	path.join(__dirname, 'notes', 'mynotes.txt'),
	path.join(__dirname, 'notes', 'notes.txt'),
	(err) => {
		if (err) throw err
		console.log('The file was renamed');
	}
)



