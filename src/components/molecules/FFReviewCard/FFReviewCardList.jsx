import React from 'react'
import FFReviewCard from './FFReviewCard'

const FFReviewCardList = () => {
  const review = {
    review_id: 1,
    user_id: '642d7a00adc38c896ac0a758',
    user_name: 'John Doe',
    date: '12:00 pm on 03 March 2023',
    rating: 4.0,
    comment:
      'I recently purchased fresh corn from this online vegetable market and I must say I was pleasantly surprised by the quality of the produce. The corn was sweet, tender and full of flavor. It was delivered to me fresh and well-packaged, with no signs of damage or spoilage. I cooked it for dinner and my family absolutely loved it!',
  }
  return (
    <>
      <div>
        {
          /* loop the componenet 10 times */
          [...Array(10)].map((e, i) => (
            <FFReviewCard key={i} review={review} />
          ))
        }
      </div>
    </>
  )
}

export default FFReviewCardList
