import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLoading, isError } from '../../../redux/features/productSlice'
import FFRating from '../FFRating/FFRating'
import { LoadingIcon } from '../../../assets/icons/LoadingIcon'
import FFImageSlider from '../FFImageSlider/FFImageSlider'
import './product.css'
import BasketIcon from '../../../assets/icons/BasketIcon'
import { PlusIcon } from '../../../assets/icons/PlusIcon'

const FFProductView = ({ match, history, product }) => {
  const [qty, setQty] = useState(1)
  const loading = useSelector(isLoading)
  const error = useSelector(isError)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(productAction.product(match.params.productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, match])

  const addToCartHandler = () => {
    // dispatch(addToCart(match.params.productId, qty));
    history.push('/cart')
  }

  return (
    <div>
      {/* {createReviewError && <p>error</p>} */}
      {loading ? (
        <LoadingIcon />
      ) : error ? (
        <p>Error message</p>
      ) : (
        <div className="product-view-product rounded-xl border border-grey-200">
          <div className="product-view-product-content">
            <div className="product-view-product-img">
              <img src={product.product_images[0]} alt="product image" />
            </div>
            <div className="product-view-product-btns">
              <button type="button" className="product-view-btn-cart">
                + add to cart
                <span className="">
                  <PlusIcon />
                </span>
              </button>
              <button type="button" className="product-view-btn-buy">
                buy now
                <span>
                  <BasketIcon />
                </span>
              </button>
            </div>
          </div>

          <div className="product-view-product-info">
            <div className="product-view-product-info-top">
              <h2 className="product-view-sm-title">{product.product_name}</h2>
              <div className="product-view-rating">
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="far fa-star"></i>
                </span>
              </div>
            </div>
            <a href="#" className="product-view-product-name">
              mens shoes DN 23XX, new product
            </a>
            <p className="product-view-product-price">
              LKR {product.product_price}
            </p>
            <p className="product-view-product-price">
              LKR{' '}
              {product.product_price -
                (product.product_price * product.product_offer) / 100}
            </p>
          </div>
          <div className="product-view-off-info">
            <h2 className="product-view-sm-title">
              {product.product_offer}% off
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default FFProductView
