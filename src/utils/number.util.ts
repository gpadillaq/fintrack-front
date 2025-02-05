import {Currencies} from '../interfaces';

export const amountFormatter = (
  amount: number,
  currency: Currencies | string,
) => {
  if (isNaN(amount)) {
    return `${currency} 0.00`;
  }
  return `${currency} ${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
