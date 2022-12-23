type getDiscountPercentageFuncType = (
  base_price: number | undefined,
  price: number | undefined,
) => number;

export const getDiscountPercentage: getDiscountPercentageFuncType = (base_price, price) => {
  if (base_price && price) return Math.floor(((base_price - price) / base_price) * 100);
  return 0;
};
