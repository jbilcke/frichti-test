/**
 * Create cookie
 *
 * @param {string} name - The name of the cookie
 * @param {string} value - The textual representation of the value of the cookie
 * @param {number} days - Number of days the cookie will be conserved
 * @param {string} domain - If you want to restrict the domain (Optional)
 */
export function createCookie(name, value, days = 1, domain = null) {
  let cookie = `${name}=${value}; path=/; max-age=${60 * 60 * 24 * days};`;
  if (domain) cookie += ` domain=${domain};`;
  document.cookie = cookie;
}

/**
 * Read cookie
 *
 * @param {string} name - The unique name of the cookie
 */
export function readCookie(name) {
  if (typeof document === 'undefined') {
    return null;
  }

  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
}

/**
 * Erase cookie
 *
 * @param {string} name
 */
export function eraseCookie(name) {
  createCookie(name, '', -1);
}
