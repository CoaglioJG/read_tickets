import GenericError from './genericError';

export const checkDigitableLine = (ticket: string) => {
  const ticketLength = ticket.length;
  const verifyNumber = /^\d+$/;

  if (ticketLength < 47 || ticketLength > 48) {
    throw new GenericError(
      `Check the numbers again, you must enter 47 or 48 characters and not ${ticketLength}`,
      400,
      'Line lenght error',
    );
  }

  const onlyNumbers = verifyNumber.test(ticket);

  if (!onlyNumbers) {
    throw new GenericError('Just numbers', 400, 'Characters erros');
  }

  return ticketLength;
};
