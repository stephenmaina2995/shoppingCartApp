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
        let shopping = document.getElementById("shopping");

        productName.innerText = element.productname;
        productPrice.innerText = element.price;
        productDecription.innerText = element.descrpition;
        productQuantity.innerText = element.quantity;
        img.src = element.img;

        shopping.appendChild(img);
        shopping.appendChild(productName);
        shopping.appendChild(productPrice);
        shopping.appendChild(productQuantity);
        shopping.appendChild(productDecription);
      });
    });
});
