/*
 * Little function to generate a random ID for an HTMl element.
 */

function generateID(prefix) {
  prefix = prefix || 'id';
  return prefix + '-' + Math.random().toString(36).substring(2);
}

export default generateID;
