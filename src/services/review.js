import axios from '../lib/axios'

export const createReview = async (review) => {
  try {
    const response = await axios.post('/review', review)
    return response.data
  } catch (error) {
    console.error(`Error creating review: ${error}`)
  }
}

export const updateReview = async (review_id, review) => {
  try {
    const response = await axios.put(`/review/${review_id}`, review)
    return response.data
  } catch (error) {
    console.error(`Error updating review: ${error}`)
  }
}

export const deleteReview = async (review_id) => {
  try {
    const response = await axios.delete(`/review/${review_id}`)
    return response.data
  } catch (error) {
    console.error(`Error deleting review: ${error}`)
  }
}

export const fetchReviews = async (review) => {
  try {
    const response = await axios.get(
      `/review/farmer-or-product?${Object.keys(review)[0]}=${
        Object.values(review)[0]
      }`,
    )
    return response.data
  } catch (error) {
    console.error(`Error fetching reviews: ${error}`)
  }
}

export const fetchAllReviews = async () => {
  try {
    const response = await axios.get('/review')
    return response.data
  } catch (error) {
    console.error(`Error fetching reviews: ${error}`)
  }
}
