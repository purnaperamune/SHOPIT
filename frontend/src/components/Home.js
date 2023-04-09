import React, { Fragment, useEffect  } from 'react'
// import Pagination from 'react-js-pagination'
// import Slider from 'rc-slider'
// import 'rc-slider/assets/index.css';

import MetaData from './layout/MetaData'
// import Product from './product/Product'
// import Loader from './layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
// import { useAlert } from 'react-alert';
import { getProducts } from '../actions/productActions'
import Product from './product/Product'

// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range)

const Home = () => {

    // const [currentPage, setCurrentPage] = useState(1)
    // const [price, setPrice] = useState([1, 1000])
    // const [category, setCategory] = useState('')
    // const [rating, setRating] = useState(0)

    // const categories = [
    //     'Electronics',
    //     'Cameras',
    //     'Laptops',
    //     'Accessories',
    //     'Headphones',
    //     'Food',
    //     "Books",
    //     'Clothes/Shoes',
    //     'Beauty/Health',
    //     'Sports',
    //     'Outdoor',
    //     'Home'
    // ]

    // const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)

    // const keyword = match.params.keyword

    useEffect(() => {
        // if (error) {
        //     return alert.error(error)
        // }

        // dispatch(getProducts(keyword, currentPage, price, category, rating));
        dispatch(getProducts());


        // [dispatch, alert, error, keyword, currentPage, price, category, rating]
    }, [dispatch])

    // function setCurrentPageNo(pageNumber) {
    //     setCurrentPage(pageNumber)
    // }

    let count = productsCount;
    // if (keyword) {
    //     count = filteredProductsCount
    // }

    return (
        <Fragment>
            {loading ? <h1>Loading...</h1> : (
                <Fragment>
                <MetaData title={'Buy Best Products Online'} />
                <h1 id="products_heading">Latest Products</h1>
                <section id="products" class="container mt-5">
                    <div class="row">
                        {products && products.map(product => (
                        <Product key={product._id} product={product} />
                        ))}
                    </div>
                </section>
            </Fragment>
            )}
        </Fragment>
        
    )
}

export default Home
