import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { isLoading, isError } from '../../../redux/features/productSlice'
import FFRating from '../FFRating/FFRating'
import { LoadingIcon } from '../../../assets/icons/LoadingIcon'
import FFImageSlider from '../FFImageSlider/FFImageSlider'
const FFProduct = ({ match, history, product }) => {
  const [qty, setQty] = useState(1)
  const loading = useSelector(isLoading)
  const error = useSelector(isError)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(productAction.product(match.params.productId));
    // eslint-disable-next-line
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
        <>
          <div className="flex flex-col m-10 space-y-3 p-3 border border-gray-300 rounded-lg">
            <div className="flex justify-center items-center ml-10">
              <div>
                <FFImageSlider images={product.product_images} />
              </div>
            </div>
            <div>
              <h2 className="text-xl mt-4">{product.product_name}</h2>
            </div>
            <div className="col-span-1">
              <div className="flex flex-row w-full justify-center items-center">
                <div className="flex justify-center items-center">
                  <FFRating
                    value={3.2}
                    ratingStyles={{ marginInline: '0px' }}
                    text={`${
                      product.product_reviews
                        ? product.product_reviews.length
                        : 0
                    } reviews`}
                  />
                  <p className="ml-2">Price: LKR{product.product_price}</p>
                </div>
              </div>
              <div className="flex flex-row w-full justify-center items-center">
                <div className="w-4/6">
                  <p className="mb-2">
                    Status:{' '}
                    {product.product_quantity > 0 ? 'In Stock' : 'Out Of Stock'}
                  </p>
                </div>
                {product.product_quantity > 0 && (
                  <div className="w-2/6">
                    <select
                      className="w-full p-2 border border-gray-300 rounded"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.product_quantity).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              <button
                className="bg-blue-500 rounded-xl text-white px-4 py-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={addToCartHandler}
                disabled={!product.product_quantity}
              >
                Add To Cart
              </button>
            </div>
          </div>

          {/* <ProductReview productId={match.params.productId} /> */}
        </>
      )}
    </div>
  )
}

export default FFProduct
