/**
* Events.js
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
  	eventPreview:{
  		type: 'TEXT'
  	},
  	eventImageUrl:{
  		type: 'STRING'
  	},
  	description: {
  		type: 'TEXT',
  		required: true
  	},
  	begin: {
  		type: 'DATETIME',
  		required: true
  	},
  	end: {
  		type: 'DATETIME',
  		required: true
  	}
  }
};

