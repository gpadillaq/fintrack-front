export class TransactionDto {
  constructor(
    public readonly amount: number,
    public readonly description: string,
    public readonly startDate: Date,
    public readonly type: string,
    public readonly minimumAmount?: number,
    public readonly paymentFrecuency?: string,
  ) {}

  static create(object: {[key: string]: any}): [string?, TransactionDto?] {
    const {
      amount,
      description,
      startDate,
      type,
      minimumAmount,
      paymentFrecuency,
    } = object;

    if (!amount) return ['Missing amount'];
    if (!description) return ['Missing description'];
    if (!startDate) return ['Missing startDate'];
    if (!type) return ['Missing type'];
    if (!minimumAmount) return ['Missing categoryId'];
    if (!paymentFrecuency) return ['Missing accountId'];

    return [
      undefined,
      new TransactionDto(
        amount,
        description,
        startDate,
        type,
        minimumAmount,
        paymentFrecuency,
      ),
    ];
  }
}
