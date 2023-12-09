import categoryService from "@/services/categoryService";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// Async thunk para obtener las categorías desde una API
export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async () => {
    const res = await categoryService.getCategories();
    return res;
  }
);

export const fetchCategoryBySlug = createAsyncThunk(
  'categoryBySlug/fetch',
  async (slug) => {
    const res = await categoryService.getCategoryBySlug(slug);
    return res;
  }
);

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    loading: false,
    error: null,
    itemBySlug: [],
    itemBySlugLoading: false,
    itemBySlugError: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCategoryBySlug.pending, state => {
        state.itemBySlugLoading = true;
        state.itemBySlugError = null;
      })
      .addCase(fetchCategoryBySlug.fulfilled, (state, action) => {
        state.itemBySlugLoading = false;
        state.itemBySlug = action.payload;
      })
      .addCase(fetchCategoryBySlug.rejected, (state, action) => {
        state.itemBySlugLoading = false;
        state.itemBySlugError = action.error.message;
      })

  },
});

export default categorySlice.reducer;