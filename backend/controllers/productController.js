const Product = require('../models/products')
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apifeatures');

exports.newProduct = catchAsyncError (async (req, res, next) => {     
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})



exports.getProducts = catchAsyncError (async (req, res, next) => {
    const products = await Product.find();

    res.status(200).json({
        success: true, 
        count: products.length,
        products
    })
})

// Get single product details   =>   /api/v1/product/:id
exports.getSingleProduct = catchAsyncError (async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product Not Found!', 404));
    }

    res.status(200).json({
        success: true,
        product
    })
})

// Update Product   =>   /api/v1/admin/product/:id
exports.updateProduct = catchAsyncError (async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product Not Found!', 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        product
    })

})

// Delete Product   =>   /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncError (async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product Not Found!', 404));
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Product is deleted.'
    })

})
