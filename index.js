//Read functionality
document.addEventListener("DOMContentLoaded", () => {
  return fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      //console.log(data)
      data.forEach((element) => {
        const productsList = document.querySelector("#root");

//const product=[data]

        let card = document.createElement("li");
        let id = element.id
        card.innerHTML = `<div class='box'>
      <div class='img-box'>
          <img class='img' src='${element.img}'></img>
      </div>
      <div class='bottom'>
          <p>${element.productname}</p>
          <h2>${element.price}.00</h2>
          <h3>${element.descrpition}</h3>
          <h4>${element.quantity}</h4>
          
          <button onclick="addtocart(${element.i})">Add to cart</button>
          <button id="deleteproduct" onclick="deleteProduct(${id})">Delete</button>
          
      </div>
      </div>`;

            productsList.appendChild(card);
        return card;
      });

      
    //Update function
    let url = "http://localhost:3000/products";
let product = {
  id: 10,
  productName: "Chocolate",
  price: 10.99
};
let element = document.querySelector('#root');
let options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(product)
};
function updatePrice(id) {
  fetch(`${url}/${id}`, options)
    .then(response => response.json())
    .then(data => {element.innerHTML = data.status;
      console.log(data.status);
    })
    .catch(error => console.error(error));
}
//Update ;  
      function displayCart(a) {
        let j = 0,
          total = 0;
        document.getElementById("count").innerHTML = cart.length;
        {
          if (cart.length == 0) {
            document.getElementById("cartItem").innerHTML = "Start shopping";
            document.getElementById("total").innerHTML = "Kshs" + 0 + ".00";
          } else {
            document.getElementById("cartItem").innerHTML = sidebar
              .map((item) => {
                let { img, productname, price } = items;
                total = total + price;
                document.getElementById("total").innerHTML = "Kshs " + total + ".00";
                return `
                      <div class='cart-item'>
                      <div class='row-img'>
                      <img class='rowing' src='${img}'>
                      <p style='font-size: 12px;'>${productname}</p>
                      <h2 style='font-size: 15px;'>${price}.oo</h2>+
                      <i class='fa-solid fa-trash'onClick='delElement("+(j++)+")'></i></div>"
                      `;
              })
              .join("");
          }
        }
      }

      //create functionality
      let form = document.getElementById("newProduct");
      form.addEventListener("submit", (event) => {
          event.preventDefault();
          
          let productname = document.getElementById("productName");
          let imageURL = document.getElementById("img");
          let description = document.getElementById("description");
          let price = document.getElementById("price");
          let quantity = document.getElementById("quantity");

          fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productname: productname,
              price: price,
              descrpition: description,
              quantity: quantity,
              img: imageURL,
            }),
          });
        })
        
          console.log(data);
        })
        .catch((error) => console.error(error));

    });

///delete function
function deleteProduct(id){

  console.log(`Hello World ${id}`)
  fetch(`http://localhost:3000/products/${id}`, {
          method: 'DELETE',
          headers:{
            "Content-Type":"application/json"
          }
        })
  
}