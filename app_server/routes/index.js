var express = require('express');
var routes = express.Router();
var ctrlArticles = require('../controllers/articles');
var ctrlUsers = require('../controllers/users');
var ctrlAngular = require('../controllers/angularApp');


// routes.get('/', ctrlArticles.index);
routes.get('/', ctrlAngular.angularApp);
routes.get('/article/:articleid', ctrlArticles.article);
routes.get('/newarticle', ctrlArticles.newArticle);
routes.get('/category', ctrlArticles.category);
routes.get('/category/:categoryid/articles',ctrlArticles.getArticlesByCategory);

routes.get('/user', ctrlUsers.index);

module.exports = routes;
