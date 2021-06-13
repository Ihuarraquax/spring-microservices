import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    gameName: {type: String, required: true},
    company: {type: String, required: true,},
    platform: {type: String, required: true,},
    releaseYear: {type: Number, required: true},
    distribution: {type: String, required: true,},
    description: {type: String, required: true,},
    genre: {type: String, required: true},
    imageSrc: {type: String, required: true},
    count: {type: Number, required: true},
    price: {type: Number, required: true},
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;
