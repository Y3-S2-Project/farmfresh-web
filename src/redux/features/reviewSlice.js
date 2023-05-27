// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import {
//   createReview,
//   updateReview,
//   deleteReview,
//   fetchReviews,
//   fetchAllReviews,
// } from '../../services/review'
// import { async } from 'q'

// const initialState = {
//   reviews: [],
//   loading: false,
//   success: false,
//   error: false,
//   message: '',
//   status: 0,
//   review: {
//     review_id: '',
//     review_rating: 0,
//     review_description: '',
//     image: '',
//     user_id: '',
//     product_id: '',
//     farmer_id: '',
//     helpful: 0,
//     reported: 0,
//     flagged: false,
//   },
//   add_review_modal: {
//     modal: false,
//     review_id: '',
//     review_rating: 0,
//     review_description: '',
//     image: '',
//     user_id: '',
//     product_id: '',
//     farmer_id: '',
//     helpful: 0,
//     reported: 0,
//     flagged: false,
//   },
//   edit_review_modal: {
//     modal: false,
//     review_id: '',
//     review_rating: 0,
//     review_description: '',
//     image: '',
//     user_id: '',
//     product_id: '',
//     farmer_id: '',
//     helpful: 0,
//     reported: 0,
//     flagged: false,
//   },
//   delete_review_modal: {
//     modal: false,
//   },
// }

// export const createReviewAsync = createAsyncThunk(
//   'review/createReview',
//   async (review) => await createReview(review),
// )

// export const updateReviewAsync = createAsyncThunk(
//   'review/updateReview',
//   async (review) => await updateReview(review),
// )

// export const deleteReviewAsync = createAsyncThunk(
//   'review/deleteReview',
//   async (review_id) => await deleteReview(review_id),
// )

// export const fetchReviewsAsync = createAsyncThunk(
//   'review/fetchReviews',
//   async (review) => await fetchReviews(review),
// )

// export const fetchAllReviewsAsync = createAsyncThunk(
//   'review/fetchAllReviews',
//   fetchAllReviews,
// )

// const handleAsyncAction = (state, action) => {
//   if (action.payload) {
//     state.loading = false
//     state.success = action.payload?.data?.success
//     state.message = action.payload?.data?.message
//     state.status = action.payload?.data?.status
//     state.error = action.payload?.data?.error
//   }
// }

// const reviewSlice = createSlice({
//     name: 'review',
//     initialState,
//     reducers: {
//         addReviewModal: (state, action) => {
//             state.add_review_modal = action.payload
//         },
//         editReviewModal: (state, action) => {
//             state.edit_review_modal = { ...action.payload?.review}
//             state.edit_review_modal = {
//                 ...state.edit_review_modal,
//                 modal: action.payload?.open,
//             }
//         },
//         deleteReviewModal: (state, action) => {
//             state.delete_review_modal = action.payload
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(createReviewAsync.pending, (state, action) => {
//                 state.loading = true
//             })
//             .addCase(createReviewAsync.fulfilled, (state, action) => {
//                 state.loading = false
//                 handleAsyncAction(state, action)
//                 state.reviews = [...state.reviews, action.payload?.data?.review]
//             })
//             .addCase(createReviewAsync.rejected, (state, action) => {
//                 handleAsyncAction(state, action)
//             })
//             .addCase(updateReviewAsync.pending, (state, action) => {
//                 state.loading = true
//             })
//             .addCase(updateReviewAsync.fulfilled, (state, action) => {
//                 state.loading = false
//                 handleAsyncAction(state, action)
//                 state.reviews = state.reviews.map((review) =>
//                     review.review_id === action.payload?.data?.review.review_id
//                         ? action.payload?.data?.review
//                         : review,
//                 )
//             })
//             .addCase(updateReviewAsync.rejected, (state, action) => {
//                 handleAsyncAction(state, action)
//             }
//     }
