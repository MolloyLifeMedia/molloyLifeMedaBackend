/**
* Videos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    //data["items"][v]["snippet"]["title"]
    title: {
      type: 'STRING',
      required: true
    },
    //data["items"][v]["id"]["videoId"]
    videoID: {
      type: 'STRING',
      required: true
    },
    //data["items"][v]["snippet"]["thumbnails"]["medium"]["url"]
    videoThumbnail: {
      type: 'STRING',
      required: true
    },
    //data["items"][v]["snippet"]["description"]
    videoDescription: {
      type: 'TEXT',
    }

  }
};

