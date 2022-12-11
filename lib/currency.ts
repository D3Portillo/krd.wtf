const Formatter = new Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "USD",
})

export const formatCurrency = (value: any) => Formatter.format(value || 0)
