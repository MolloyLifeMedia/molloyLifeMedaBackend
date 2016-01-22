/**
 * ArticleController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	scrapeArticles: function(req, res) {
    ScrapeArticles.scrapeArticle(req.body.url, function(err, data) {
      if(err) {
        return res.negotatiate(err);
      }
      return res.json(data);
    });
  }
};

