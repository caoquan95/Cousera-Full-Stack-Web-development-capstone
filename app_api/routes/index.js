var express = require('express');
var routes = express.Router();
var ctrlAuth = require('../controllers/authentication');
var ctrlArticles = require('../controllers/articles');
var ctrlComments = require('../controllers/comments');

routes.post('/register', ctrlAuth.register);
routes.post('/login', ctrlAuth.login);

routes.get('/articles', ctrlArticles.articlesAlls);
routes.post('/articles', ctrlArticles.articlesCreate);
routes.get('/articles/:articleid', ctrlArticles.articlesReadOne);
routes.put('/articles/:articleid', ctrlArticles.articlesUpdateOne);
routes.delete('/articles/:articleid', ctrlArticles.articlesDeleteOne);

routes.post('/articles/:articleid/comments', ctrlComments.commentsCreate);
routes.get('/articles/:articleid/comments', ctrlComments.commentsReadAll);
routes.put('/articles/:articleid/comments/:commentid', ctrlComments.commentsUpdateOne);
routes.delete('/articles/:articleid/comments', ctrlComments.commentsDeleteOne);
routes.get('/articles/:articleid/comments/:commentid', ctrlComments.commentsReadOne);

module.exports = routes;
