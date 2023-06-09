import axios from 'axios'
import {setProducts, setLoading, setError, setProduct} from '../slices/products'

export const getProducts = () => async (dispatch) => {
    dispatch(setLoading(true))

    try {
        const {data} = await axios.get('http://localhost:5000/api/products')
        dispatch(setProducts(data))
    } catch (error) {
        dispatch
            (setError(
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message 
                ? error.message 
                : "An unexpected error has occured. Please try again later."
            ))
    }
}

export const getProduct = (id) => async (dispatch) => {
    dispatch(setLoading(true))

    try {
        const {data} = await axios.get(`http://localhost:5000/api/products/id/${id}`)
        dispatch(setProduct(data))
    } catch (error) {
        dispatch
            (setError(
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message 
                ? error.message 
                : "An unexpected error has occured. Please try again later."
            ))
    }
}

export const getProductsByBrand = (name) => async (dispatch) => {
    dispatch(setLoading(true))

    try {
        const {data} = await axios.get(`http://localhost:5000/api/products/brand/${name}`)
        dispatch(setProducts(data))
    } catch (error) {
        dispatch
            (setError(
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message 
                ? error.message 
                : "An unexpected error has occured. Please try again later."
            ))
    }
}

export const getProductsByPrice = (price) => async (dispatch) => {
    dispatch(setLoading(true))

    try {
        const {data} = await axios.get(`http://localhost:5000/api/products/price/${price}`)
        dispatch(setProducts(data))
    } catch (error) {
        dispatch
            (setError(
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message 
                ? error.message 
                : "An unexpected error has occured. Please try again later."
            ))
    }
}

export const getProductsByQuery = (price, brand) => async (dispatch) => {
    dispatch(setLoading(true))

    try {
        const {data} = await axios.get(`http://localhost:5000/api/products/product?price=${price}&brand=${brand}`)
        dispatch(setProducts(data))
    } catch (error) {
        dispatch
            (setError(
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message 
                ? error.message 
                : "An unexpected error has occured. Please try again later."
            ))
    }
}