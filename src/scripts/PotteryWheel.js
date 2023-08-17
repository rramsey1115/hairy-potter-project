//potId which will increment each time a pot is made - inside makePottery
let potId = 1

/*  INSTRUCTIONS FROM BOOK
    The makePottery function must accept the following values as input (i.e. it needs parameters), in the following order.
    Shape of the piece of pottery (e.g. "Mug", "Platter")
    Weight of the piece (e.g. 1, 5)
    Height of the piece (e.g. 3, 7)
    The makePottery function must return an object with the following properties on it.
    shape
    weight
    height
    id (increment this value each time the function is invoked) 
*/

//invoke with 3 arguments to make a pottery object
export const makePottery = (itemShape, itemWeight, itemHeight) => {
    const pottery = {
        shape: itemShape,
        weight: itemWeight,
        height: itemHeight,
        id: potId
    } 
    potId++
    return pottery;
}