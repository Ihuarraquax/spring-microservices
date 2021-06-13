import express from 'express';
import Product from '../models/productModel';
import {isAuth, isAdmin} from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
    const platform = req.query.platform ? {platform: req.query.platform} : {};
    const products = await Product.find({...platform});
    res.send(products);
});

router.get("/:id", async (req, res) => {
    const product = await Product.findOne({_id: req.params.id});
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message: "Gra nie została znaleziona."});
    }
});

router.put("/:id", isAuth, isAdmin, async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
        product.gameName = req.body.gameName,
            product.company = req.body.company,
            product.platform = req.body.platform,
            product.releaseYear = req.body.releaseYear,
            product.distribution = req.body.distribution,
            product.description = req.body.description,
            product.genre = req.body.genre,
            product.imageSrc = req.body.imageSrc,
            product.count = req.body.count,
            product.price = req.body.price

        const updatedProduct = await product.save();
        if (updatedProduct) {
            return res.status(200).send({message: 'Gra zaaktualizowana', data: updatedProduct});
        }
    }
    return res.status(500).send({message: ' Błąd podczas aktualizacji gry.'});

});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {
        await deletedProduct.remove();
        res.send({message: "Gra usunięta"});
    } else {
        res.send("Błąd podczas usuwania gry.");
    }
});


router.post("/", isAuth, isAdmin, async (req, res) => {
    const product = new Product({
        gameName: req.body.gameName,
        company: req.body.company,
        platform: req.body.platform,
        releaseYear: req.body.releaseYear,
        distribution: req.body.distribution,
        description: req.body.description,
        genre: req.body.genre,
        imageSrc: req.body.imageSrc,
        count: req.body.count,
        price: req.body.price,

    });
    const newProduct = await product.save();
    if (newProduct) {
        return res.status(201).send({message: 'Nowa gra została dodana', data: newProduct});
    }
    return res.status(500).send({message: ' Błąd podczas dodawania gry'});
})

const products = require('../seed/product')
//console.log(products);
Product.findOne({}, function (err, doc) {
    if (!doc) {
        Product.insertMany(products);
        console.log("INIT PRODUKTÓW")
    } else {
        console.log("Baza produktów już jest, nie trzeba initować");
    }
});

export default router;
