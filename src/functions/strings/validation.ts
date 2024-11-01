/**
 * Check whether given two string are identical or not
 * @param {string} strA
 * @param {string} strB 
 * @returns {boolean}
 */
export const isIdentical = (strA: string, strB: string): boolean => {
  strA = strA.trim();
  strB = strB.trim();

  if (strA === strB) {
    return true;
  }
  return false;
}

/**
 * Check whether given string is a valid email or not
 * @param {string} str 
 * @returns {boolean}
 */
export const isEmail = (str: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

/**
 * Check whether given string is empty, null or undefined
 * @param {string} str 
 * @returns {boolean}
 */
export const isEmpty = (str: string): boolean => {
  if (str === "" || null || undefined) {
    return true;
  }
  return false;  
}

/**
 * Check whether given string is type of string or not
 * @param {string} str 
 * @returns {boolean}
 */
export const isString = (str: string): boolean => {
  if (typeof str === "string") {
    return true;
  }
  return false;  
}