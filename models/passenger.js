class Passenger {
  constructor(name, idNumber, amountOfMoney) {
    this.name = name;
    this.idNumber = idNumber;
    this.amountOfMoney = amountOfMoney;
  }
}

export class StudentPassenger extends Passenger {
  constructor(name, idNumber, amountOfMoney, studyPlaceName) {
    super(name, idNumber, amountOfMoney);
    this.studyPlaceName = studyPlaceName;
  }
}

export class RegularPassenger extends Passenger {
  constructor(
    name,
    idNumber,
    amountOfMoney,
    workplace,
    knowsAnAirportEmployee
  ) {
    super(name, idNumber, amountOfMoney);
    this.workplace = workplace;
    this.knowsAnAirportEmployee = knowsAnAirportEmployee;
  }
}
