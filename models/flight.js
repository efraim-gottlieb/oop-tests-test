export class Flight {
  constructor(
    flightName,
    airline,
    flightNumber,
    maximumNumberOfPassengers,
    regularTicketPrice,
    vipTicketPrice
  ) {
    this.flightName = flightName;
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.maximumNumberOfPassengers = maximumNumberOfPassengers;
    this.regularTicketPrice = regularTicketPrice;
    this.vipTicketPrice = vipTicketPrice;
  }
  ticketList = [];
}
