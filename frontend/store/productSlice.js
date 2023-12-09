import productService from "@/services/productService";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


// ASYNC THUNK
export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const res = await productService.getProducts();
    return res;
  }
);

export const fetchProductsByCateg = createAsyncThunk(
  'productsByCateg/fetch',
  async (slug) => {
    const res = await productService.getProductsByCateg(slug);
    return res;
  }
);

export const fetchProductBySlug = createAsyncThunk(
  'productBySlug/fetch',
  async (slug) => {
    const res = await productService.getProductBySlug(slug);
    return res;
  }
);

export const fetchRelatedProducts = createAsyncThunk(
  'relatedProducts/fetch',
  async (slug) => {
    const res = await productService.getRelatedProducts(slug);
    return res;
  }
);

export const fetchProductsSortedByPriceASC = createAsyncThunk(
  'productsSortedByPriceASC/fetch',
  async () => {
    const res = await productService.getProductsSortedByPriceASC();
    return res;
  }
);

export const fetchProductsSortedByPriceDESC = createAsyncThunk(
  'productsSortedByPriceDESC/fetch',
  async () => {
    const res = await productService.getProductsSortedByPriceDESC();
    return res;
  }
);

export const fetchProductsSortedByNameASC = createAsyncThunk(
  'productsSortedByNameASC/fetch',
  async () => {
    const res = await productService.getProductsSortedByNameASC();
    return res;
  }
);

export const fetchProductsSortedByNameDESC = createAsyncThunk(
  'productsSortedByNameDESC/fetch',
  async () => {
    const res = await productService.getProductsSortedByNameDESC();
    return res;
  }
);

export const fetchProductsSortedByReleaseDate = createAsyncThunk(
  'productsSortedByReleaseDate/fetch',
  async () => {
    const res = await productService.getProductsSortedByReleaseDate();
    return res;
  }
);


// SLICE
export const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    itemsByCat: [],
    itemsByCatLoading: false,
    itemsByCatError: null,
    itemBySlug: [],
    itemBySlugLoading: false,
    itemBySlugError: null,
    relatedProducts: [],
    relatedProductsLoading: false,
    relatedProductsError: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsByCateg.pending, state => {
        state.itemsByCatLoading = true;
        state.itemsByCatError = null;
      })
      .addCase(fetchProductsByCateg.fulfilled, (state, action) => {
        state.itemsByCatLoading = false;
        state.itemsByCat = action.payload;
      })
      .addCase(fetchProductsByCateg.rejected, (state, action) => {
        state.itemsByCatLoading = false;
        state.itemsByCatError = action.error.message;
      })
      .addCase(fetchProductBySlug.pending, state => {
        state.itemBySlugLoading = true;
        state.itemBySlugError = null;
      })
      .addCase(fetchProductBySlug.fulfilled, (state, action) => {
        state.itemBySlugLoading = false;
        state.itemBySlug = action.payload;
      })
      .addCase(fetchProductBySlug.rejected, (state, action) => {
        state.itemBySlugLoading = false;
        state.itemBySlugError = action.error.message;
      })
      .addCase(fetchRelatedProducts.pending, state => {
        state.relatedProductsLoading = true;
        state.relatedProductsError = null;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.relatedProductsLoading = false;
        state.relatedProducts = action.payload;
      })
      .addCase(fetchRelatedProducts.rejected, (state, action) => {
        state.relatedProductsLoading = false;
        state.relatedProductsError = action.error.message;
      })
      .addCase(fetchProductsSortedByPriceASC.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsSortedByPriceASC.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductsSortedByPriceASC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsSortedByPriceDESC.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsSortedByPriceDESC.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductsSortedByPriceDESC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsSortedByNameASC.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsSortedByNameASC.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductsSortedByNameASC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsSortedByNameDESC.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsSortedByNameDESC.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductsSortedByNameDESC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsSortedByReleaseDate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsSortedByReleaseDate.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductsSortedByReleaseDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default productSlice.reducer;