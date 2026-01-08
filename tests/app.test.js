import { test, describe } from "node:test";
import assert from "node:assert";
import { Airport } from "../models/airportSystem.js";
import { RegularPassenger, StudentPassenger } from "../models/passenger.js";

export const airport = new Airport();
export const regularPassenger = new RegularPassenger(
  "Sari",
  "3232323",
  100,
  "Leumit",
  false
);
export const studentPassenger = new StudentPassenger(
  "Efraim",
  "326080025",
  15000,
  "KodCode"
);
airport.buyRegularTicket(airport.flights[0], regularPassenger);
airport.buyVipTicket(airport.flights[1], studentPassenger);

describe("buy logic tests", () => {
  test("return false if not enough money to buy the ticket", () => {
    assert.strictEqual(
      airport.buyRegularTicket(airport.flights[0], regularPassenger),
      false
    );
  });

  test("ticket name natched", () => {
    assert.strictEqual(
      airport.buyRegularTicket(airport.flights[0], studentPassenger).ticket.ownerNmae,
      studentPassenger.name
    );
  });

  test("correct money reduction", () => {
    assert.strictEqual(
      studentPassenger.amountOfMoney,
      11525
    );
  });
});
