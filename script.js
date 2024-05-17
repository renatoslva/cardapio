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




cartBtn.addEventListener('click', function(){ 
   
    cartModal.style.display = "flex"
    updateCartModal();   
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
addToCart(name, price)
//console.log(name)
//console.log(price)
})

let cart = [];

function addToCart(name, price) {
            const existingItem = cart.find(item => item.name === name)
            if(existingItem) {
                existingItem.quantity += 1;
        }else{

            cart.push({ name,  price,  quantity: 1 });

 //console.log(cart)
        }

updateCartModal();


}

function updateCartModal() {

    cartItemsContainer.innerHTML = "";

        let total = 0;


        
cart.forEach(item => {
   
    const cartItemElement = document.createElement("div");

    cartItemElement.innerHTML = ` 
            <div>
        <div>
                <p>${item.name}</p>
                <p>${item.quantity}</p>
                <p>${item.price}</p>
        </div>
    <div>
                   0 <buttom> Remover </buttom>
         </div>
            </div> 
                    `
                    cartItemsContainer.appendChild(cartItemElement)
        })
}