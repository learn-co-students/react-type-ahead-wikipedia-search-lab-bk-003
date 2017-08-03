'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();
  const arrOfResults = []

  return wikipedia.search(query).then((data) => {
  	if (resultStore.isOutdated(requested)) return
  	for (let i = 0; i < data[1].length; i++) {
  		const obj = {
  			title: data[1][i],
  			description: data[2][i],
  			link: data[3][i],
  		}
  		arrOfResults.push(obj)
  	}
  	resultStore.setState({results: arrOfResults, updated: requested})
  });
};

module.exports = { search };
