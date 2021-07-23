const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if (req.method === "GET") {  //download the page
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=utf-8'
		})

		if (req.url === '/') {
			fs.readFile(
				path.join(__dirname, 'views', 'index.html'),
				'utf-8',
				(err, content) => {
					if (err) {
						throw err;
					}

					res.end(content)
				} 
			)	
		} else if (req.url ==='/about') {
			fs.readFile(
				path.join(__dirname, 'views', 'about.html'),
				'utf-8',
				(err, content) => {
					if (err) {
						throw err;
					}

					res.end(content)
				} 
			)
		} else if (req.url === '/api/users') {
			res.writeHead(200, {
				'Content-Type': 'text/json'
			})

			const users = [
				{name: 'Vladilen', age: 25},
				{name: 'Helen', age: 23}
			]

			res.end(JSON.stringify(users))
		}
	} else if (req.method ==='POST') {
		const body = [];
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=utf-8'
		})
		req.on('data', data => {
					
			body.push(Buffer.from(data));
		})

		req.on('end', () => {
			
			const message = body.toString().split('=')[1];
			console.log(message)	
			res.end(`
				<h1>Your message: ${message}</h1>
			`)
		})

		
	}
	// console.log(req.url);

	// res.write('<h1>Hello from NodeJS</h1>');
	// res.write('<h2>Hello from NodeJS</h2>');
	// res.write('<h3>Hello from NodeJS</h3>');
	// res.end(`
	// 	<div style="background: red; width: 200px; height: 200px;">
	// 	<h1>Test1</h1>
	// 	</div>
	// `);
})

server.listen(3000, () => {
	console.log('Server is running on port 3000');
})