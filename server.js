const http = require('http');
const express = require('express');
const mysql = require('mysql');
const parser = require('body-parser');

// MySQL connection
const connection = mysql.createConnection({
	database: 'node_shop',
	host: 'localhost',
	password: 'root',
	user: 'root'
});

try {
	/* connection.connect(); */
} catch (err) {
	console.log('Database connection failed:' + err);
}


// Express
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
	extended: true
}));
app.set('port', process.env.PORT || 5000);

// Default path
app.get('/', (req, res) => {
	res.send('<html><body><p>Guten tag, world!</p></body></html>');
});

// Enable CORS headers
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// Messages path
app.get('/messages', (req, res) => {

	// MySQL query
	/* connection.query('SELECT * from messages where 1 = 1', function(err, rows, fields) {
		if (!err) {
			const response = [];

			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}

			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(response));
		} else {
			res.status(400).send(err);
		}
	}); */

	// Dummy data
	// TODO: Remove this!
	const response = {
		included: [],
		data: [{
				attributes: {
					date: '2015-10-11T08:40:51.620Z',
					useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
					message: 'hi!',
					username: 'bob.jones',
					pic: 'http://semantic-ui.com/images/avatar/small/elliot.jpg'
				},
				type: 'messages',
				id: '1'
			},
			{
				attributes: {
					date: '2015-10-16T09:40:51.620Z',
					useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
					message: 'hey!',
					username: 'grace.kelly',
					pic: 'http://semantic-ui.com/images/avatar/small/helen.jpg'
				},
				type: 'messages',
				id: '2'
			},
			{
				attributes: {
					date: '2015-10-22T10:40:51.620Z',
					useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
					message: 'sup!',
					username: 'john.huffman',
					pic: 'http://semantic-ui.com/images/avatar/small/jenny.jpg'
				},
				type: 'messages',
				id: '3'
			},
			{
				attributes: {
					date: '2015-11-01T11:40:51.620Z',
					useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
					message: 'yo!',
					username: 'alex.johnson3',
					pic: 'http://semantic-ui.com/images/avatar/small/joe.jpg'
				},
				type: 'messages',
				id: '4'
			}
		],
		links: {}
	};

	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(JSON.stringify(response));
});

// Run it
let server = http.createServer(app)
	.listen(app.get('port'), () => {
		console.log('Server listening on port ' + app.get('port'));
	});

module.exports = server;
