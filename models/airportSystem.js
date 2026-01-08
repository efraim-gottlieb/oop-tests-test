import { Flight } from "./flight.js";
import { RegularTicket, VipTicket } from "./ticket.js";

export class Airport {
  flights = [];
  createTickets(flight, numOfPassengers, regularTicketPrice, vipTicketPrice) {
    const regularTicketsNum = +(numOfPassengers * 0.9).toFixed();
    const vipTicketsNum = numOfPassengers - regularTicketsNum;
    for (let i = 1; i <= regularTicketsNum; i++) {
      const ticket = new RegularTicket(regularTicketPrice, null);
      flight.ticketList.push(ticket);
    }
    for (let i = 1; i <= vipTicketsNum; i++) {
      const ticket = new VipTicket(vipTicketPrice, null, true, true, true);
      flight.ticketList.push(ticket);
    }
  }
  constructor() {
    const flight1 = new Flight("USA", "ELAL", "2214", 150, 1200, 1750);
    this.createTickets(
      flight1,
      flight1.maximumNumberOfPassengers,
      flight1.regularTicketPrice,
      flight1.vipTicketPrice
    );
    this.flights.push(flight1);
    const flight2 = new Flight("IL", "ELAL", "5458", 200, 1400, 1900);
    this.createTickets(
      flight1,
      flight1.maximumNumberOfPassengers,
      flight1.regularTicketPrice,
      flight1.vipTicketPrice
    );
    this.flights.push(flight2);
    const flight3 = new Flight("UK", "ELAL", "5488", 180, 650, 900);
    this.createTickets(
      flight1,
      flight1.maximumNumberOfPassengers,
      flight1.regularTicketPrice,
      flight1.vipTicketPrice
    );
    this.flights.push(flight3);
  }
}

const a = new Airport();

