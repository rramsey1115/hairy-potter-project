// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 4, 4)
let vas = makePottery("Vas", 12, 15)
let bowl = makePottery("Bowl", 6, 5)
let plate = makePottery("Plate", 9, 1)
let platter = makePottery("Platter", 15, 3)
let planter = makePottery("Planter", 15, 3)
let sculpture = makePottery("Sculpture", 50, 80)


//test makePottery() outputs
console.log(mug)
console.log(vas)
console.log(bowl)
console.log(plate)
console.log(platter)



// Fire each piece of pottery in the kiln
//shoud add properties to object --->>> fired: true && cracked: true/false
const firedMug = firePottery(mug, 20000)
const firedVas = firePottery(vas, 1800)
const firedBowl = firePottery(bowl, 26000)
const firedPlate = firePottery(plate, 1999)
const firedPlatter = firePottery(platter, 1111)
const firedPlanter = firePottery(planter, 2000)
const firedSculpture = firePottery(sculpture, 2199)

//check we are getting desired output
console.log(firedMug)
console.log(firedVas)
console.log(firedBowl)
console.log(firedPlate)
console.log(firedPlatter)



// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedVas)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedPlatter)
toSellOrNotToSell(firedPlanter)
toSellOrNotToSell(firedSculpture)




// Invoke the component function that renders the HTML list
const useForList = usePottery()
const HTMLString = potteryList(useForList)

document.querySelector(".potteryList").innerHTML = HTMLString


