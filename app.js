import { Airport } from "./models/airportSystem.js";
import { RegularPassenger, StudentPassenger } from "./models/passenger.js"


const airport = new Airport();
const  regularPassenger = new RegularPassenger('Sari', '3232323', 10000, 'Leumit', true);
const studentPassenger = new StudentPassenger('Efraim', '326080025', 15000, 'KodCode')
airport.buyRegularTicket(airport.flights[0], regularPassenger);
airport.buyVipTicket(airport.flights[0], studentPassenger);
console.log(regularPassenger.amountOfMoney);
console.log(studentPassenger.amountOfMoney);
