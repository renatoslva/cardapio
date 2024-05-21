const { cart } = require("./script");

export function updateCartModal() {
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
                    `;

    });

    cartItemsContainer.appendChild(cartItemElement);
}
