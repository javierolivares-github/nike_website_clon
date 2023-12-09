const categoryService = {
  getCategories: async () => {
    try {
      const res = await fetch("/categories.json");
      const {data} = await res.json();
      return data;
    } catch(error) {
      throw new Error('Error al obtener las categorías.');
    }
  },
  getCategoryBySlug: async (slug) => {
    try {
      const res = await fetch("/categories.json");
      const {data} = await res.json();
      const category = data.filter(item => item.attributes.slug === slug);
      return category;
    } catch (error) {
      throw new Error('Error al obtener la categoría por slug.');
    }
  }
}

export default categoryService;