export class Ticket {
  barCode: string;
  amount: string;
  expirationDate?: string;

  // para não mapear entidades que não fazem parte da aplicacao;
  constructor(ticket?: Partial<Ticket>) {
    this.amount = ticket?.amount;
    this.barCode = ticket?.barCode;
    this.expirationDate = ticket?.expirationDate;
  }
}
