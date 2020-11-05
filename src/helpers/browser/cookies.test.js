import { createCookie, readCookie, eraseCookie } from './cookies';

describe('Helpers - Browser/Cookies', () => {
  // Re-init cookies between each test
  beforeEach(() => {
    eraseCookie('cookie');
    eraseCookie('ice-cream');
    eraseCookie('cheese-cake');
  });

  describe('createCookie helper', () => {
    it('should create a cookie', () => {
      createCookie('cookie', 'chocolate');

      expect(document.cookie).toEqual('cookie=chocolate');
    });

    it('should not create to cookies with the same name', () => {
      createCookie('cookie', 'chocolate');
      createCookie('cookie', 'vanilla');

      expect(document.cookie).toEqual('cookie=vanilla');
    });

    it('should create multiples cookies', () => {
      createCookie('cookie', 'chocolate');
      createCookie('ice-cream', 'vanilla');

      expect(document.cookie).toEqual('cookie=chocolate; ice-cream=vanilla');
    });
  });

  describe('readCookie helper', () => {
    it('should read a cookie', () => {
      // Init 2 cookies
      createCookie('cookie', 'chocolate');
      createCookie('ice-cream', 'vanilla');

      expect(readCookie('cookie')).toEqual('chocolate');
      expect(readCookie('ice-cream')).toEqual('vanilla');
    });

    it('should return null if no cookie', () => {
      expect(readCookie('cheese-cake')).toBe(null);
    });
  });

  describe('eraseCookie helper', () => {
    it('should erase a cookie', () => {
      // Init 2 cookies
      createCookie('cookie', 'chocolate');
      createCookie('ice-cream', 'vanilla');

      eraseCookie('ice-cream');

      expect(document.cookie).toEqual('cookie=chocolate');
    });

    it('should not erase a missing cookie', () => {
      // Init 2 cookies
      createCookie('cookie', 'chocolate');
      createCookie('ice-cream', 'vanilla');

      eraseCookie('cheese-cake');

      expect(document.cookie).toEqual('cookie=chocolate; ice-cream=vanilla');
    });
  });
});
