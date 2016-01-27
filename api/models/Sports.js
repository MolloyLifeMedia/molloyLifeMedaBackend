/**
* Sports.js
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
    imageURL: {
      type: 'STRING',
    },
    sportPreview: {
      type: 'TEXT'
    },
    datePublished:{
      type: 'DATE'
    },
    body: {
      type: 'TEXT',
      required: true
    }
  }
};

