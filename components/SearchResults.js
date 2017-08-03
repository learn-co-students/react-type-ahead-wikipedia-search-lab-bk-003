'use strict'

const React = require('react');

const SearchResults = ({ results }) => (
  <ul className="search-results">
  	{results.map((res,i) => 
  		<li key={i}>
  			<a href={res.link}>{res.title}</a>
  			<p>{res.description}</p>
  		</li>
  	)}
  </ul>
);

module.exports = SearchResults;
