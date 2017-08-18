const request = require('supertest');
const server = require('./server');

describe('Express API server', () => {
	it('Responds to /messages', function testMessages(done) {
		request(server)
			.get('/messages')
			.expect(200, done);
	});

	it('404s everything else', function testPath(done) {
		console.log('test 404')
		request(server)
			.get('/foo/bar')
			.expect(404, done);
	});
});
