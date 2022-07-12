//Import SpaceLocation into parts1-5.ts.
import { SpaceLocation } from './SpaceLocation';

let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

// Part 4: Create a Spacecraft Class

class Spacecraft {
                milesPerKilometer: number = 0.621;
                name: string;
                speedMph: number;
                    constructor(name : string, speedMph : number) {
                                this.name = "Determination";
                                this.speedMph = 17500;
                    }
                    getDaysToLocation(kilometersAway:number):number {
                        let milesAway : number = kilometersAway * this.milesPerKilometer; 
                        let hoursToLocation   : number = milesAway / this.speedMph;
                        let daysToLocation   : number = hoursToLocation / 24;
                        return daysToLocation;
                     }
                     printDaysToLocation(location: SpaceLocation) {
                        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
                     }
                
              }
// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);
// Add the printDaysToLocation function to the Spacecraft class.
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));


// Paste in the code from step 6 here:
// Part 2: Print Days to Mars
// let milesToMars : number = kilometersToMars * milesPerKilometer;
// let hoursToMars  : number = milesToMars / speedMph;
// let daysToMars   : number = hoursToMars / 24;
// Code an output statement here (use a template literal):
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars`);
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(getDaysToLocation(kilometersToTheMoon));
// console.log(`${spacecraftName} would take ${(getDaysToLocation(kilometersToTheMoon))} days to get to the Moon`);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to Mars`);
// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to the Moon`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.