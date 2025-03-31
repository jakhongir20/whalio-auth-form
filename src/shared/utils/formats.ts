export function formatMoneyDecimal(
  number?: number,
  fix = 0,
  option = "decimal",
) {
  if (!number) {
    return "0";
  }

  let style: Intl.NumberFormatOptions["style"] | undefined;
  switch (option) {
    case "USD":
    case "RUB":
      style = "currency";
      break;
    case "kilogram":
    case "meter":
    case "percent":
      style = "unit";
      break;
    default:
      style = "decimal";
  }

  return new Intl.NumberFormat("en-US", {
    style,
    currency: style === "currency" ? option : undefined,
    unit: style === "unit" ? option : undefined,
    maximumFractionDigits: fix,
    minimumFractionDigits: fix,
  })
    .format(number)
    .replace(/,/g, " ");
}
