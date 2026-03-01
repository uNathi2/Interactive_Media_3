//1.Variables and Assignment
let availableTickets = 200;

//2. Data Types
//2.1 Numbers
const ticketPrice = 850;
const serviceFee = 37.5;

//2.2 Strings
const eventName = "Bloom Music Festival";
const venu = "Madison Square Garden"

//2.3 Booleans
const isSoldOut = false;
const isAllAgesEvent = true;

let selectedSeat = null; //no seat chosen yet, intentionally empty

//2.4 Objects
const event = {
    name: "Bloom Music Festival",
    venu: venu,"Madison Square Garden",
    ticketPrice: 850,
    isSoldOut: false,
};

//2.5 Arrays
const attendees = ["Alice" , "Bob", "Carol"];

//3. Strings and Interpolation
//template literals
const message = "Welcome to" + eventName + ". Ticket Cost R" + ticketPrice + ".";

const newMessage = `Welcome to ${eventName}. Tickets cost ${ticketPrice}`;

//4. Operators and Expressions
const totalCost = ticketPrice + serviceFee; //
const discount = ticketPrice - 50; //multiplication
const groupPrice = ticketPrice * 4;
const pricePerHead = groupPrice /4; // division
const reminder = 200 % 3; // modulo remainder after division

//4.2 comparison operators
ticketPrice == 850; // true, but DONT USE THIS
ticketPrice === 850; // true, use this instead 
availableTickets >= 200 //true
availableTickets <=100 //false

ticketPrice === 850; //true, use this instead

//4.3 logical operators
const canEnter = !IsSoldOut && isAllAgesEvent; //%% means AND

console.log(IsSoldOut); //true
console.log(isSoldOut || true); //true
console.log(isSoldOut && true); //false

//5. Control Flow
//5.1 conditionals
if (availableTickets > 50) {
    console.log("Good availability");
} else if (availableTickets > 0) { console.log("Hurry, there are "); }

}