import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  addCategory,
  editCategory,
  fetchCategory,
  fetchCategories,
  deleteCategory,
} from '../../services/category'

const initialState = {
  categories: [],
  loading: false,
  success: false,
  error: false,
  message: '',
  status: 0,
  category: {
    _id: null,
    category_id: '',
    category_name: '',
    category_status: '',
    category_description: '',
    category_image: '',
  },
  add_category_modal: false,
  edit_category_modal: {
    modal: false,
    _id: null,
    category_id: '',
    category_name: '',
    category_status: '',
    category_description: '',
    category_image: '',
  },
  view_category_modal: {
    modal: false,
    category_id: '',
    category_name: '',
    category_status: '',
    category_description: '',
    category_image: '',
  },
}

export const getAllCategories = createAsyncThunk(
  'categories/fetchCategories',
  fetchCategories,
)
export const getCategory = createAsyncThunk(
  'categories/fetchCategory',
  async (category_id) => await fetchCategory(category_id),
)

export const postCategory = createAsyncThunk(
  'categories/addCategory',
  async (category) => await addCategory(category),
)
export const updateCategory = createAsyncThunk(
  'categories/editCategory',
  async (updatedCategory, category_id) =>
    await editCategory(updatedCategory, category_id),
)

export const removeCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (category_id) => await deleteCategory(category_id),
)

const handleAsyncAction = (state, action) => {
  if (action.payload) {
    state.loading = false
    state.success = action.payload?.data?.success
    state.message = action.payload?.data?.message
    state.status = action.payload?.data?.status
    state.error = action.payload?.data?.error
  }
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategoryModal: (state, action) => {
      state.add_category_modal = action.payload
    },
    editCategoryModalOpen: (state, action) => {
      state.edit_category_modal = { ...action.payload?.category }
      state.edit_category_modal = {
        ...state.edit_category_modal,
        modal: action.payload.open,
      }
    },
    viewCategoryModalOpen: (state, action) => {
      state.view_category_modal = { ...action.payload?.category }
      state.view_category_modal.modal = action.payload.open
    },
  },
  extraReducers: (builder) => {
    builder
      // getAllcategory extra reducers
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action?.payload?.data?.data

        handleAsyncAction(state, action)
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
      // getcategory extra reducers
      .addCase(getCategory.pending, (state) => {
        state.loading = true
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.category = { ...action.payload?.data?.data }
        handleAsyncAction(state, action)
      })
      .addCase(getCategory.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })

      // postCategory extra reducers
      .addCase(postCategory.fulfilled, (state, action) => {
        state.loading = false
        handleAsyncAction(state, action)
        state.categories.push(action?.payload?.data?.data)
      })
      .addCase(postCategory.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
      // removeCategory extra reducers
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.loading = false
        handleAsyncAction(state, action)
        state.categories = state.categories.filter(
          (category) =>
            category.category_id !== action?.payload?.data?.data.category_id,
        )
      })
      .addCase(removeCategory.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
      // updateCategory extra reducers
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false
        handleAsyncAction(state, action)
        state.categories = state.categories.map((category) =>
          category.category_id === action?.payload?.data?.data.category_id
            ? action?.payload?.data?.data
            : category,
        )
      })
      .addCase(updateCategory.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
  },
})

export const {
  addCategoryModal,
  viewCategoryModalOpen,
  editCategoryModalOpen,
  alertModalOpen,
} = categoriesSlice.actions

export const selectAllCategories = (state) => state.categories.categories
export const selectCategory = (state) => state.categories.category
export const edit_category_modal = (state) =>
  state.categories.edit_category_modal
export const view_category_modal = (state) =>
  state.categories.view_category_modal
export const add_category_modal = (state) => state.categories.add_category_modal

export const category_id = (state) => state.categories.category?.category_id

export const isLoading = (state) => state.categories.loading
export const isSuccess = (state) => state.categories.success
export const isError = (state) => state.categories.error
export const message = (state) => state.categories.message

export default categoriesSlice.reducer
