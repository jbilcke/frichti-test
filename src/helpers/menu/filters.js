/**
 * joinFilters
 *
 * Helper function to apply an array of filters
 *
 * @param {Array} filters - The array of filters to appy
 */
export const joinFilters = (filters = []) => (items = []) =>
  items.filter((item) => filters.every((filter) => filter(item)));

/**
 * filterProductsByName helper
 *
 * USER STORY 1 - Search products by name
 *
 * @param {string} name - The name to search
 */
export const filterProductsByName = (name = '') => {
  const searchName = name.trim().toLowerCase();
  return ({ product: { title } }) => title.toLowerCase().includes(searchName);
};

/**
 * filterProductsWithoutAllergens helper
 *
 * USER STORY 3 - Filter products without some allergens
 *
 * @param {Array} forbiddenAllergens - An array of strings defining allergens to forbid
 */
export const filterProductsWithoutAllergens = (forbiddenAllergens = []) => {
  const rejectionSet = new Set(forbiddenAllergens);
  return ({ product: { allergens } }) =>
    !allergens.some((allergen) => rejectionSet.has(allergen));
};
