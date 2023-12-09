const productService = {
  getProducts: async () => {
    try {
      const res = await fetch("/products.json");
      const {data} = await res.json();
      return data;
    } catch(error) {
      throw new Error('Error al obtener los productos');
    }
  },
  getProductsByCateg: async (slug) => {
    try {
      const res = await fetch("/products.json");
      const {data} = await res.json();
      const products = data.filter(item => item?.attributes?.categories?.data?.[0]?.attributes?.slug === slug);
      return products;
      
    } catch(error) {
      throw new Error('Error al obtener los productos');
    }
  },
  getProductBySlug: async (slug) => {
    try {
      const res = await fetch("/products.json");
      const {data} = await res.json();
      const product = data.filter(item => item.attributes.slug === slug);
      return product;

    } catch(error) {
      throw new Error('Error al obtener los productos');
    }
  },
  getRelatedProducts: async (slug) => {
    try {
      const res = await fetch("/products.json");
      const {data} = await res.json();
      const product = data.filter(item => item.attributes.slug === slug);
      const productCategory = product?.[0]?.attributes?.categories?.data?.[0]?.attributes?.slug;
      const productsByCategory = data.filter(item => item.attributes.categories.data[0].attributes.slug === productCategory);
      const relatedProducts = productsByCategory.filter(item => item.attributes.slug !== slug);
      return relatedProducts;

    } catch(error) {
      throw new Error('Error al obtener los productos');
    }
  },
  getProductsSortedByPriceASC: async () => {
    try {
      const res = await fetch("/products.json");
      const {data} = await res.json();
      const sortedProducts = data.sort((a, b) => a.attributes.price - b.attributes.price);
      return sortedProducts;

    } catch(error) {
      throw new Error('Error al obtener los productos');
    }
  },
  getProductsSortedByPriceDESC: async () => {
    try {
      const res = await fetch("/products.json");
      const {data} = await res.json();
      const sortedProducts = data.sort((a, b) => b.attributes.price - a.attributes.price);
      return sortedProducts;

    } catch(error) {
      throw new Error('Error al obtener los productos');
    }
  },
  getProductsSortedByNameASC: async () => {
    try {
      const res = await fetch("/products.json");
      const {data} = await res.json();
      const sortedProducts = data.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name));
      return sortedProducts;

    } catch(error) {
      throw new Error('Error al obtener los productos');
    }
  },
  getProductsSortedByNameDESC: async () => {
    try {
      const res = await fetch("/products.json");
      const {data} = await res.json();
      const sortedProducts = data.sort((a, b) => b.attributes.name.localeCompare(a.attributes.name));
      return sortedProducts;

    } catch(error) {
      throw new Error('Error al obtener los productos');
    }
  },
  getProductsSortedByReleaseDate: async () => {
    try {
      const res = await fetch("/products.json");
      const {data} = await res.json();
      const sortedProducts = data.sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt));
      return sortedProducts;

    } catch(error) {
      throw new Error('Error al obtener los productos');
    }
  },

}

export default productService;