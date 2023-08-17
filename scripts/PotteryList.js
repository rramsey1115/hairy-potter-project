import { usePottery } from "./PotteryCatalog.js"


export const potteryList = (usePottery) => {
    let html = `<section class="pottery `
    for (let item of usePottery) {
        html += `id="pottery--${item.id}">
           <h2 class="pottery__shape">${item.shape}</h2>
            <div class="pottery__properties">
             This weird thing weighs ${item.weight} pounds and is ${item.height} inches in height
            </div>
            <div class="pottery__price">
                Price is a whopping $${item.price}.00!!!
            </div>
        </section`
    }
         return html
}



// example code for how to crat HTML from pottery object
//
//
// <section class="pottery" id="pottery--1">
//   <h2 class="pottery__shape">Mug</h2>
//   <div class="pottery__properties">
//     Item weighs 3 grams and is 6 cm in height
//   </div>
//   <div class="pottery__price">Price is $20</div>
// </section>
//
//