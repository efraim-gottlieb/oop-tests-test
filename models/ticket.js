import { createRandomId } from "../utils/randomNumber.js";

export class RegularTicket {
  ticketNumber = createRandomId(8);
  constructor(price, ownerName) {
    this.price = price;
    this.ownerNmae = ownerName;
  }
}

export class VipTicket extends RegularTicket {
  benefitsList = [];
  constructor(price, ownerNmae, freeAlcohol, freeFood, hotTowels) {
    super(price, ownerNmae);
    if (freeAlcohol) this.benefitsList.push("Free alcohol");

    if (freeFood) this.benefitsList.push("Free food");

    if (hotTowels) this.benefitsList.push("Hot towels");
  }
}
