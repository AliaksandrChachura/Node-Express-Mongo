const EventEmetter = require('events');

class Logger extends EventEmetter {
	log(message) {
		this.emit('message', `${message} ${Date.now()}`);
	};
	
}

const logger = new Logger();

logger.on('message', data => {
	console.log(data);
})

logger.log('Hello');