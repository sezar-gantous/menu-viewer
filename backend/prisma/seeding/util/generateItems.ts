export const generateItems = <T>(
  numItems: number,
  generateItem: () => T
): T[] => {
  const items = new Array<T>(numItems);

  for (let i = 0; i < items.length; i++) {
    items[i] = generateItem();
  }

  return items;
};
