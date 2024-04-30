export function getUniqueID() {
  return crypto.randomUUID().split('-')[0];
}
