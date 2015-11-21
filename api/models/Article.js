/**
* Article.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	title: {
  		type: 'STRING',
  		required: true
  	},
  	thumbnailImageUrl: {
  		type: 'STRING'
  	},
  	articleSummary: {
  		type: 'TEXT'
  	},
  	bodyImageUrl: {
  		type: 'STRING'
  	},
  	body: {
  		type: 'TEXT',
  		required: true
  	},
  	datePublished: {
  		type: 'DATE',
  		required: true
  	},
  	author: {
  		type: 'STRING'
  	}
  }
};

