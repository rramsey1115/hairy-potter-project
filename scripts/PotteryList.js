import { usePottery } from "./PotteryCatalog.js"


export const potteryList = (usePottery) => {
    let html = " "
    for (let item of usePottery) {
        html += `<section class="pottery__card" id="pottery--${item.id}">
            <div class="pottery__shape">
                <h3>${item.shape}</h3>
            </div>

            <div class="pottery__properties">
             <h4>This weird looking thing weighs ${item.weight} pounds and is ${item.height} inches tall.</h4>
            </div>

            <div class="pottery__price">
                <h4>Price is $${item.price}, Biotch!</h4>
            </div> 
            </section>`
    } return html
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