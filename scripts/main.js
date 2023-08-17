// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 4, 4)
let vas = makePottery("vas", 12, 15)
let bowl = makePottery("bowl", 6, 5)
let plate = makePottery("plate", 9, 1)
let platter = makePottery("platter", 15, 3)
//test makePottery() outputs
console.log(mug)
console.log(vas)
console.log(bowl)
console.log(plate)
console.log(platter)



// Fire each piece of pottery in the kiln
//shoud add properties to object --->>> fired: true && cracked: true/false
const firedMug = firePottery(mug, 2000)
const firedVas = firePottery(vas, 1800)
const firedBowl = firePottery(bowl, 26000)
const firedPlate = firePottery(plate, 28765)
const firedPlatter = firePottery(platter, 1111)
//check we are getting desired output
console.log(firedMug)
console.log(firedVas)
console.log(firedBowl)
console.log(firedPlate)
console.log(firedPlatter)




// Determine which ones should be sold, and their price






// Invoke the component function that renders the HTML list



