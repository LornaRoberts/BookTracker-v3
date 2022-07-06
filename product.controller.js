const { name } = require('ejs');
const Product = require('../models/product.model');

//Simple version, without validation or sanitation



exports.start = function (req, res) {
    res.sendFile('index.html', { root: './views' })}

    exports.entry = function (req, res) {
        res.render('entry.ejs', { root: './views' })}

exports.test = function (req, res) {
    res.render('index.ejs', { root: './views' })}

exports.product_create = function (req, res) {
    let book = new Product(
        {
            name: req.body.name,
            book: req.body.book
        }
    );

    book.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

    exports.product_details = function (req, res) {
        
        Product.find(req.params.id).sort({name: 1})
        .then(results => {
             res.render('all.ejs', {books:results})
        })
       .catch();
     };
    
exports.product_update = function (req, res) {
    Product.findOneAndUpdate({}, {$set: req.body}, function (err, book) {
        if (err) return next(err);
        res.send('Book updated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findOneAndRemove("req.params.id", function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};