'use strict';

const Store = require('./Store');

class ResultStore extends Store {
	isOutdated(date) {
		return this.state.updated > date
	}
}

module.exports = new ResultStore({results: []});
