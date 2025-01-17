const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  fs = require('fs');

const categoryRoutes = require('../service/categoryService');
const propertyRoutes = require('../service/propertyService');
const propertySearchRoutes = require('../service/propertySearchService');
const neighbourRoutes = require('../service/neighbourService');
const newsRoutes = require('../service/newsService');

const mongo = require('../config/app-mongo.js');

mongo.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('Request: ' + req.body);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
 
  next();
});

app.use('/api/categories', categoryRoutes);
app.use('/api/property', propertyRoutes);
app.use('/api/search', propertySearchRoutes);
app.use('/api/neighbour', neighbourRoutes);
app.use('/api/news', newsRoutes);

module.exports = app;
