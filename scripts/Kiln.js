export const firePottery = (potteryObj, num) => {
    potteryObj.fired = true;
    if ( num > 2200 ) {
        potteryObj.cracked = true
    } else {
        potteryObj.cracked = false
    }
    return potteryObj
}