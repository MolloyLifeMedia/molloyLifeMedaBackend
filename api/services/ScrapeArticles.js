var cheerio = require('cheerio');
var request = require('request');

/**
 * @description Parses a single MolloyLife article via URL
 * @param  {String} article_url - The URL of the article to be scraped
 * @param  {Function} cb - callback
 */

function scrapeSingleArticle(article_url, cb) {
  request(article_url, function(err,res,body){
    if(err){
      return cb(err);
    }

    var new_article = {};

    var $ = cheerio.load(body);

    var article_body = $('.news_post_article').children('p').text();
    new_article.body = article_body.replace(/By:\s(.*)\s\s\s/,'');

    var date_string = $('.news_date').text();
    new_article.date = new Date(date_string);

    var img_string = /\/assets(.*)\.jpg/g.exec($('#page-header-bg').attr('style'));
    new_article.img = "http://www.molloy.edu/" + img_string[0];

    var article_author = /By:\s(.*)n+\s\|/g.exec($('.news_post_article').children('p').text());
    new_article.author = article_author[1];

    new_article.title = $('.section-title.news-title').text().trim();

    return cb(null, new_article);

  });

}



// Public Functions
module.exports = {

  scrapeArticle: function(url, cb) {
    scrapeSingleArticle(url, cb);
  }

}



























//     scrapeIt: function(cb) {
//       var url = 'http://www.molloy.edu/molloy-life/molloy-life-news/';

//     // Request method for webpage
//     request(url, function(err,res,body){

//       if(err){
//         return cb(err);
//       }

//       /*** CheerioJs Documentation: https://github.com/cheeriojs/cheerio ***/

//       var $ = cheerio.load(body);

//       // Object to store articles & attributes
//       var articlesObject = [];

//       // Counts the number of articles on webpage
//       var numOfArticles = 0;

//       $('.news_post').each(function(i,elem){
//         numOfArticles += 1;
//       });

//       // Arrays to store article titles, dates
//       var titles = [];
//       var dates = [];
//       var articlePreviews = [];
//       var thumbImgUrls = [];
//       var articleBodyUrls = [];

//       // Base URL to build on concatinated URLs
//       var baseAddress = "http://molloy.edu/";

//       // Traverses through classes 'title', 'date', storing text in corresponding array

//       $('.title').each(function(i,elem){
//         var articleTitle = $(this).text().trim();
//         titles[i] = articleTitle;
//       });

//       $('.date').each(function(i,elem){
//         var articleDate = $(this).text().trim();
//         dates[i] = articleDate;
//       });

//       $('.content-inner').each(function(i,elem){
//         var articleBodyUrl = baseAddress + $(this).children('a').attr('href');
//         var articlePreview = $(this).children('p').text().replace(/\r\n\t*Read More$/g,'');

//         articleBodyUrls[i] = articleBodyUrl;
//         articlePreviews[i] = articlePreview;
//       });

//       $('.post-featured-img').each(function(i,elem){
//         var thumbnailImageUrl = baseAddress + $(this).children('img').attr('src');
//         thumbImgUrls[i] = thumbnailImageUrl;
//       });

//      // Loop through titles array & create article objects
//     //   for (var i = 0; i < numOfArticles; i++){
//     //     articlesObject.push(
//     //       {
//     //       title: titles[i],
//     //       thumbImgUrl: thumbImgUrls[i],
//     //       articlePreview: articlePreviews[i],
//     //       //articleBodyUrl: articleBodyUrls[i],
//     //       //bodyImgUrl: bodyImgUrls[i],
//     //       //articleBody: articlePageObjects[i].articleBody,
//     //       datePublished: dates[i]
//     //       //author: authors[i]
//     //     });
//     //   }

//     //   return cb(null, articlesObject);
//     // });
// });
// },



// var article_scrapes = [];
// for i in articles:
//   article_scrapes.add(
//     function(callback) {
//       scrapeArticle(i.url, function(err, data) {
//         if(err) {
//           console.err(err);
//         }

//         Article.create(data);

//       });
//     }
//   )



