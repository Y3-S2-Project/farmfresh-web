import React, { useEffect, useState } from 'react'
import FFReviewCard from './FFReviewCard'
import { fetchReviews } from '../../../services/review'

const FFReviewCardList = (product_id) => {
  console.log('card list rview', product_id)
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetchReviews(product_id)
      .then((res) => {
        console.log('This is the fetched reviews: ', res)
        setReviews(res.data)
      })
      .catch((err) => {
        console.log('Error fetching reviews: ', err)
      })
  }, [])
  return (
    <>
      <div>
        {reviews.map((review) => (
          <FFReviewCard key={review._id} review={review} />
        ))}
      </div>
    </>
  )
}

export default FFReviewCardList
