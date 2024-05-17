const menu = document.getElementById("menu1")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItems = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCount = document.getElementById("cart-count")
const addressInput = document.getElementById("addreess")
const addressWarn = document.getElementById("address-warn")


let cart = [];

cartBtn.addEventListener('click', function(){
    cartModal.style.display = "flex"
})

cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})


menu.addEventListener("click", function(event){
//console.log (event.target)
let parentBotton = event.target.closest(".add-to-card-btn")
//console.log(parentBotton)

const name = parentBotton.getAttribute("data-name")
const price = parseFloat(parentBotton.getAttribute("data-price"))
//console.log(name)
//console.log(price)
})