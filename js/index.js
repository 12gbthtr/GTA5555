let buyf = false
let btn = document.getElementById("btn")
let basket=0
let price=btn.previousSibling.previousSibling.textContent
price=parseInt(price)
let basketPrice=document.querySelector('.price')
console. log(price)
function buy() {
    if (buyf == false) {
        btn.style.backgroundColor = "#FFFFFF"
        btn.textContent = "added"
        buyf = true
        basket=basket+price
    } else {
        btn.style.backgroundColor = "#FFFFFF"
        btn.textContent = "Buy"
        buyf = false
        basket=basket-price
    }
basketPrice.textContent=basket+'$'

}