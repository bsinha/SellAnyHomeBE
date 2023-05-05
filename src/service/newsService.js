const newsRouter = require('express').Router(),
  newsDB = require('../model/news');

/**
 * Creates a new news.
 */
newsRouter.post('', (req, res, next) => {
  const news = new newsDB({
    id: req.body.id,
    price: req.body.price,
    img1: req.body.img1,
    img2: req.body.img2,
    newsName: req.body.newsName,
    brand: req.body.brand,
    discountPrice: req.body.discountPrice,
    discountLable: req.body.discountLable,
    rating: req.body.rating,
    sale: req.body.sale,
  });

  news.save();
  console.log("News Created", news);
  res.status(201).json({
    message: 'News added successfully',
  });
});

/**
 * Returns list of newss
 */
newsRouter.get('/', (req, res, next) => {
  console.log("Fetching...")
  newsDB.find().then((docs) => {
    res.status(200).json({
      message: 'data fetched successfully!',
      news: docs,
    });
  });
});

/**
 * Returns a news by id.
 */
newsRouter.get('/:id', (req, res, next) => {
  newsDB.findById(req.params.id).then((newsdb) => {
    res.status(200).json({
      message: 'Id fetched successfully!',
      news: newsid,
    });
  });
});


module.exports = newsRouter;
