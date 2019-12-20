/*
 * Little function to generate a random ID for an HTMl element.
 */

/*
 * Generates a random id for an HTML element using the provided prefix.  If
 * no prefix is specified, the prefix 'id' is used.
 */
function generateID(prefix) {
  prefix = prefix || 'id';
  return prefix + '-' + Math.random().toString(36).substring(2);
}

export default generateID;
