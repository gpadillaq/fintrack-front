export interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: string;
  minimumAmount: number;
  paymentFrecuency: string;
  startDate: string;
}
