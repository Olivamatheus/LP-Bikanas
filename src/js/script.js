

// 2 - Menu Mobile
const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector("#menu-button");
// 2
menuButton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");
})

// 3 - Show products
document.getElementById('button-prod').addEventListener('click', () => {

    // Botão exibir produtos    
    document.querySelectorAll(".produto").forEach(products => {
        if (products.style.display === 'none') {
            products.style.display = 'flex';

            // Flip produtos
            products.addEventListener("click", ()=> {
                products.classList.toggle("flip");
    
            })
        } else {
            products.style.display = 'none';
        }

    })
})

// 4 - Bike Move


