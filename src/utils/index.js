import shortid from 'shortid';

export function getUniqueId() {
  const id = shortid.generate();
  if (id.includes('_')) {
    return getUniqueId();
  }
  return id;
}