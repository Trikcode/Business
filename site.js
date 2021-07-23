const menu = [{
    id: 1,
    title: "Vermouth",
    category: "Alcohol",
    price: '$20.99',
    img: "./images/vermouth.jpg",
    desc: `an aromatized fortified wine, flavoured with various botanicals and sometimes colored for accentuating the flavors in the base liquor `,
},
    {
    id: 2,
    title: "Posh Cakes",
    category: "Bakeries",
    price: '$20.99',
    img: "./images/cake.jpg",
    desc: `Inspired By The Traditional French 'Opera Cake', Our Posh Cakes Are A Truly Decadent Choice For Your Occasion. Order Today & Enjoy Home Delivery`,
    },
    {
    id: 3,
    title: "Whiskey",
    category: "Alcohol",
    price: '$20.99',
    img: "./images/whiskey.jpg",
    desc: ` It's time to expand your palate to the great whiskeys of the world. With this alcoholic beverage! `,
    },
    {
    id: 4,
    title: "coffee",
    category: "Sips",
    price: '$2.99',
    img: "./images/coffee.jpg",
    desc: `a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species to make you feel free `,
    },
    {
    id: 5,
    title: "Buffet",
    category: "Lunch",
    price: '$15.99',
    img: "./images/buffet.jpg",
    desc: `A hefty mental, sudden, steadying, regular cuban, ultimate unbelievable, merely sumptuous meal you can have with your family `,
    },
    {
    id: 6,
    title: "Cream supreme",
    category: "Burgers",
    price: '$5.10',
    img: "./images/butter.jpg",
    desc: `Sink your teeth into a delicious hamburger recipe made from lean beef. `,
    },
    {
    id: 7,
    title: "Beef pie",
    category: "Snacks",
    price: '$4.99',
    img: "./images/beef.jpg",
    desc: `Nothing beats a classic homemade steak pie, complete with golden-brown flaky pastry and a rich filling. `,
    },
     {
    id: 8,
    title: "Beef samosas",
    category: "Snacks",
    price: '$2.99',
    img: "./images/samosa.jpg",
    desc: `flaky pastry filled with spicy potato, chicken or lamb filling  `,
},
]
const section = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", () => {
    
    displayItems(menu)
    
})
function displayItems(menudetails) {
        let menuitems = menudetails.map((item) => {
            
            return ` <article class="menu-item">
            <img src="${item.img}" class="photo" alt="">
            <div class="item-info">
                <header>
                        <h4 class="title">${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            
            </div>
        </article>`;
        })
        menuitems = menuitems.join(" ");
        section.innerHTML = menuitems
    }
 