export const getKoreanCurrencyNumberFormat = (price: number) => {
  const numberFormatter = new Intl.NumberFormat("ko");

  return numberFormatter.format(price);
};
