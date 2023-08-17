//stores potter which has been fired and ready to sell
const forSale = []

//determines if pottery object should be sold
export const toSellOrNotToSell = (item) => {
    //assigns price based on weight property
    if (item.cracked === false && item.weight >=6) {
        item.price = 40
        forSale.push(item)
    } 
    if (item.cracked === false && item.weight < 6 ) {
        item.price = 20
        forSale.push(item)
    }
    return item
}

//makes a copy of forSale array so that we can use it in main.js without affecting original array
export const usePottery = () => {
    const forSaleCopy = [...forSale]
    return forSaleCopy
}


