

// 2 - Menu Mobile
const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector("#menu-button");
// 2
menuButton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");
})


// 3 - Show products
const button = document.getElementById('button-prod');
const products = document.querySelectorAll(".produto");


    button.addEventListener('click', () => {
  
        products.forEach(products => {
            if (products.style.display === 'none' || products.style.display === '' ) {
                products.style.display = 'flex';
               
            } else {
                products.style.display = 'none';
            }

             // Flip products
             products.addEventListener("click", ()=> {
                products.classList.toggle("flip");

            })
            
        })
    })


