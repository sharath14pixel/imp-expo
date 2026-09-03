export const usdToInr = (usd: number | string, rate = 82.5): string => {
  const n = typeof usd === 'string' ? parseFloat(usd) : usd;
  if (isNaN(n)) return '₹ 0.00';
  const inr = n * rate;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(inr);
};
