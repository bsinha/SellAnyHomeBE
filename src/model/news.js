const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  id: { type: String, require: true },
  price: { type: Number, require: true },
  img1: { type: String, require: true },
  img2: { type: String, require: true },
  newsName: { type: String, require: true },
  brand: { type: String, require: true },
  discountPrice: { type: Number, require: true },
  discountLable: { type: Number, require: true },
  rating: { type: Number, require: true },
  sale: { type: Number, require: true },
});

newsSchema.method('transform', () => {
  const obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  delete obj._id;

  return obj;
});

module.exports = mongoose.model('newsDB', newsSchema);
