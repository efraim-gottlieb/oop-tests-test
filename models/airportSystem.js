import { Flight } from "./flight.js";
import { RegularTicket, VipTicket } from "./ticket.js";
import { StudentPassenger, RegularPassenger } from "./passenger.js";

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
    const flight1 = new Flight("USA", "ELAL", "2214", 20, 1200, 1750);
    this.createTickets(
      flight1,
      flight1.maximumNumberOfPassengers,
      flight1.regularTicketPrice,
      flight1.vipTicketPrice
    );
    this.flights.push(flight1);
    const flight2 = new Flight("IL", "ELAL", "5458", 200, 1400, 1900);
    this.createTickets(
      flight2,
      flight2.maximumNumberOfPassengers,
      flight2.regularTicketPrice,
      flight2.vipTicketPrice
    );
    this.flights.push(flight2);
    const flight3 = new Flight("UK", "ELAL", "5488", 180, 650, 900);
    this.createTickets(
      flight3,
      flight3.maximumNumberOfPassengers,
      flight3.regularTicketPrice,
      flight3.vipTicketPrice
    );
    this.flights.push(flight3);
  }
  buyVipTicket(flight, passenger) {
    if (
      !flight.ticketList.filter(
        (t) => t.ownerNmae == null && t instanceof VipTicket
      ).length
    ) {
      console.log("Seats for this flight are sold out.");
      return;
    }
    if (passenger.amountOfMoney < flight.vipTicketPrice) {
      console.log("There is not enough money to purchase the ticket.");
      return;
    }
    const placeNumber = flight.ticketList.filter(
      (t) => t.ownerNmae == null && t instanceof VipTicket
    )[0].ticketNumber;
    const placeIndex = flight.ticketList.findIndex(
      (t) => t.ticketNumber == placeNumber
    );
    flight.ticketList[placeIndex].ownerNmae = passenger.name;
    let price = flight.vipTicketPrice;
    if (
      passenger instanceof RegularPassenger &&
      passenger.knowsAnAirportEmployee
    ) {
      price = price * 0.15;
    }
    passenger.amountOfMoney -= price;
    console.log({ price, "your ticket": flight.ticketList[placeIndex] });
  }
  buyRegularTicket(flight, passenger) {
    if (
      !flight.ticketList.filter(
        (t) => t.ownerNmae == null && t instanceof RegularTicket
      ).length
    ) {
      console.log("Seats for this flight are sold out.");
      return;
    }
    if (passenger.amountOfMoney < flight.regularTicketPrice) {
      console.log("There is not enough money to purchase the ticket.");
      return;
    }
    const placeNumber = flight.ticketList.filter(
      (t) => t.ownerNmae == null && t instanceof RegularTicket
    )[0].ticketNumber;
    const placeIndex = flight.ticketList.findIndex(
      (t) => t.ticketNumber == placeNumber
    );
    flight.ticketList[placeIndex].ownerNmae = passenger.name;
    let price = flight.vipTicketPrice;
    if (passenger instanceof StudentPassenger) {
      price = price * 0.9;
    }
    if (
      passenger instanceof RegularPassenger &&
      passenger.knowsAnAirportEmployee
    ) {
      price = price * 0.2;
    }
    passenger.amountOfMoney -= price;
    console.log({ price, "your ticket": flight.ticketList[placeIndex] });
  }
}