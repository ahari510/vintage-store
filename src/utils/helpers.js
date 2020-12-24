// helper functions

export const featuredProducts = (data) => {
  return data.filter((product) => {
    return product.featured === true;
  });
};
