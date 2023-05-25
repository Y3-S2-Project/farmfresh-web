import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'

import FFFilter from '../../molecules/FFFilter/FFFilter'
import FFProduct from '../../molecules/FFProduct/FFProduct'
import { LoadingIcon } from '../../../assets/icons/LoadingIcon'

import {
  isLoading,
  isError,
  isSuccess,
  message,
  selectAllProducts,
  getAllProducts,
} from '../../../redux/features/productSlice.js'

export const FFViewProducts = () => {
  const [sort, setSort] = useState([])
  const [priceRange, setPriceRange] = useState('')
  const [ltORgt, setLtORgt] = useState('')
  const [filters, setFilters] = useState({})

  const [initialLoading, setInitialLoading] = useState(true)

  const productList = useSelector(selectAllProducts)
  const loading = useSelector(isLoading)
  const error = useSelector(isError)
  const success = useSelector(isSuccess)

  const queryParams = new URLSearchParams(window.location.search)
  const searchProductKey = queryParams.get('search')
    ? queryParams.get('search').trim()
    : ''
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  const handleFilters = (key, value) => {
    setFilters({ ...filters, [key]: value })
  }

  useEffect(() => {
    if (success && initialLoading) {
      setInitialLoading(false)
    } else {
      fetchProductList()
    }
    // eslint-disable-next-line
  }, [dispatch, filters, success])

  useEffect(() => {
    handleFilters('keyWord', searchProductKey)
    // eslint-disable-next-line
  }, [searchProductKey])

  useEffect(() => {
    handleFilters('sort', sort.join(','))
    // eslint-disable-next-line
  }, [sort])

  const fetchProductList = () => {
    dispatch(getAllProducts())
  }

  const handleSort = (value) => {
    sort.includes(value)
      ? setSort(sort.filter((s) => s !== value))
      : setSort((preState) => [...preState, value])
  }

  const handlePriceRange = () => {
    if ([priceRange, ltORgt].includes('')) {
      return
    }
    filterPrevPrice()
    handleFilters(`price[${ltORgt}]`, priceRange)
  }

  const filterPrevPrice = () => {
    const filterprice = Object.keys(filters).filter((price) =>
      ['price[lt]', 'price[gte]'].includes(price),
    )
    filterprice.forEach((price) => {
      if (filters[price]) {
        delete filters[price]
      }
    })
  }

  return (
    <div className="">
      {loading ? (
        <LoadingIcon />
      ) : error ? (
        <p>{message}</p>
      ) : (
        <>
          {searchProductKey ? (
            <>
              <Link to={`/`} className="btn btn-light">
                Go Back
              </Link>
              <h1>
                Search Products for {searchProductKey}({count})
              </h1>
            </>
          ) : (
            <div className="flex flex-row ml-14 mt-2">
              <div className="flex-grow-1">
                <h1 className="text-2xl ">
                  Latest Products ({productList.length})
                </h1>
              </div>
              <div className="ml-auto mr-14">
                <FFFilter
                  sort={sort}
                  handleSort={handleSort}
                  setPriceRange={setPriceRange}
                  setLtORgt={setLtORgt}
                  ltORgt={ltORgt}
                  handlePriceRange={handlePriceRange}
                  handleFilters={handleFilters}
                  filters={filters}
                />
              </div>
            </div>
          )}
          {!productList.length && <h4>No Products</h4>}

          <Grid container spacing={2} sx={{ marginRight: '1%' }}>
            {productList?.map((product) => (
              <Grid item key={product.product_id} xs={12} sm={6} md={4} lg={3}>
                <FFProduct product={product} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}
