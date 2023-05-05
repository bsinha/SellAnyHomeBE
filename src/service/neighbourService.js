const neighbourRouter = require('express').Router(),
  neighbourDB = require('../model/neighbour');

/**
 * Creates a new neighbour.
 */
neighbourRouter.post('', (req, res, next) => {
  const neighbour = new neighbourDB({
    id: req.body.id,
    price: req.body.price,
    img1: req.body.img1,
    img2: req.body.img2,
    neighbourName: req.body.neighbourName,
    brand: req.body.brand,
    discountPrice: req.body.discountPrice,
    discountLable: req.body.discountLable,
    rating: req.body.rating,
    sale: req.body.sale,
  });

  neighbour.save();
  console.log(neighbour);
  res.status(201).json({
    message: 'neighbour data added successfully',
  });
});

/**
 * Returns list of neighbours
 */
neighbourRouter.get('/', (req, res, next) => {
  console.log("Fetching...")
  neighbourDB.find().then((docs) => {
    res.status(200).json({
      message: 'data fetched successfully!',
      neighbour: docs,
    });
  });
});

/**
 * Returns a neighbour by id.
 */
neighbourRouter.get('/:id', (req, res, next) => {
  neighbourDB.findById(req.params.id).then((neighbourdb) => {
    res.status(200).json({
      message: 'Id fetched successfully!',
      neighbour: neighbourid,
    });
  });
});


module.exports = neighbourRouter;
