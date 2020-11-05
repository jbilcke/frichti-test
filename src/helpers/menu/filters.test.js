import mockMenuContent from 'constants/mocks/menu.json';
import {
  joinFilters,
  filterProductsByName,
  filterProductsWithoutAllergens,
} from './filters';

/**
 * getNames
 *
 * Helper function to convert a list of products to a list of product names
 *
 * this is used only for easier comparison during testing
 */
const getNames = (products = []) => products.map(({ product: { title } }) => title);

describe('Menu - Filters helpers', () => {
  const { items: entrees } = mockMenuContent['menu-entrees'];
  const firstEntree = entrees[0];

  describe('filterProductsByName', () => {
    it('should match a product', () => {
      expect(filterProductsByName('houmous')(firstEntree)).toEqual(true);
    });
    it('should filter an array of products by name', () => {
      const filter = filterProductsByName('pois chiche');
      const chickPeas = entrees.filter(filter);
      expect(getNames(chickPeas)).toEqual([
        'Salade gourmande de pois chiches, feta & herbes',
      ]);
    });
  });
  describe('filterProductsWithoutAllergens', () => {
    it('should match a product without allergen', () => {
      expect(filterProductsWithoutAllergens(['Lactose'])(firstEntree)).toEqual(
        true,
      );
    });
    it('should filter an array of products without allergens', () => {
      const filter = filterProductsWithoutAllergens(['Lactose']);
      const noLactose = entrees.filter(filter);
      expect(getNames(noLactose)).toEqual([
        'Houmous de betteraves',
        'Carottes râpées au gingembre',
        'Carottes croquantes aux herbes fraîches',
        'Houmous de carottes éco-responsable',
        'Harengs fumés & pommes de terre',
        'Rouleaux de printemps veggie',
      ]);
    });
  });
  describe('joinFilters', () => {
    it('should join multiple filters', () => {
      const filter = joinFilters([
        filterProductsByName('Carotte'),
        filterProductsWithoutAllergens(['Lactose']),
      ]);
      const carrotsWithoutLactose = filter(entrees);
      expect(getNames(carrotsWithoutLactose)).toEqual([
        'Carottes râpées au gingembre',
        'Carottes croquantes aux herbes fraîches',
        'Houmous de carottes éco-responsable',
      ]);
    });
  });
});
