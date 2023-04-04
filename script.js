// Add a product with a POST request and display the response on the webpage
function addProduct() {
  //       userId: 1,
  //     }),
  //     headers: {
  //       "Contentmethod: "POST",
  //     body: JSON.stringify({
  //       title: productName,
  //       body: price,-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const output = document.getElementById("output");
  //       output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  //     })
  //     .catch((error) => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        let productName = document.createElement("p");
        let productPrice = document.createElement("p");
        let productDecription = document.createElement("p");
        let productQuantity = document.createElement("p");
        let img = document.createElement("img");
        let button = document.createElement("button");
        let button2 = document.createElement("button")
        let buttonSearch = document.createElement("button")
        let shopping = document.getElementById("shopping");
        

        productName.innerText = element.productname;
        productPrice.innerText = element.price;
        productDecription.innerText = element.descrpition;
        productQuantity.innerText = element.quantity;
        button.innerText = "Add To Cart";
        button2.innerText = "Delete";
        buttonSearch.innerText = "Search";
        img.src = element.img;
        //Total=element.price*input.value;

        shopping.appendChild(img);
        shopping.appendChild(productName);
        shopping.appendChild(productPrice);
        shopping.appendChild(productQuantity);
        shopping.appendChild(productDecription);
        shopping.appendChild(button);
        shopping.appendChild(button2);
        shopping.appendChild(buttonSearch);

        button.addEventListener("click", function (event) {
            //event.stopPropagation();
            Total.value = parseInt(Total.value) +1;
            console.log(Total.value);
            //Total.innerText=input.value*element.price;
        })
        // function updateProducts(){
        //   fetch("http://localhost:3000/products/${element.target.id}
        
        // })
        //function searchProduct(){
          //document.getElementById("demo").innerHTML = data.filter(productName);
        //}
        function addToCart(event) {
          const product = event.target.parentNode;
          const total = document.getElementById("Total");
          const totalValue = parseInt(total.value);
          const productPrice = parseInt(product.querySelector("p:nth-child(2)").innerText);
          total.value = totalValue + productPrice;
        }
        button.addEventListener("click", addToCart);

        button2.addEventListener("click", deleteProduct);

        function deleteProduct(event) {
          const product = event.target.parentNode;
          const total = document.getElementById("Total");
          const totalValue = parseInt(total.value);
          const productPrice = parseInt(product.querySelector("p:nth-child(2)").innerText);
          total.value = totalValue - productPrice;
          product.remove();
        }
        
      });
    });
});
