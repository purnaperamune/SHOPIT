import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, col }) => {
    return (
        <div key={product._id} class="col-sm-12 col-md-6 col-lg-3 my-3">
                            <div class="card p-3 rounded">
                            <img class="card-img-top mx-auto" src={product.images[0].url}/>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">
                                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                                </h5>
                                <div class="ratings mt-auto">
                                    <div class="rating-outer">
                                        <div class="rating-inner" style={ { width: `${(product.ratings / 5) * 100}%`}}></div>
                                    </div>
                                    <span id="no_of_reviews">({product.numOfReviews})</span>
                                </div>
                                <p class="card-text">${product.price}</p>
                                <Link to={`/product/${product._id}`} id="view_btn" class="btn btn-block">View Details</Link>
                            </div>
                        </div>
                    </div>
    )
}

export default Product
