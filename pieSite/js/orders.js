window.addEventListener("DOMContentLoaded", function(e) {

    const order = localStorage.getItem("order");

    if(order) {
        const pieOrder = JSON.parse(order);

        const pie = document.querySelector(".pie");

        const title = pie.querySelector(".title");
        const price = pie.querySelector(".price");
        const desc = pie.querySelector(".desc");
        
        title.innerText = pieOrder.title;
        price.innerText = pieOrder.price;
        desc.innerText = pieOrder.desc;

        const img = pie.querySelector("img");
        img.setAttribute("src", 'img/${pieOrder.id}.jpg');
        img.setAttribute("alt", pieOrder.title);
    }
});