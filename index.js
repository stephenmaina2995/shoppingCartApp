document.addEventListener("DOMContentLoaded", () => {
  return fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      //console.log(data)
      data.forEach((element) => {
        const productsList = document.querySelector("#root");

        let card = document.createElement("li");
        let id = element.id
        card.innerHTML = `<div class='box'>
      <div class='img-box'>
          <img class='img' src='${element.img}'></img>
      </div>
      <div class='bottom'>
          <p>${element.productname}</p>
          <h2>${element.price}.00</h2>
          
          <button onclick="addtocart(${element.i})">Add to cart</button>
          <button id="deleteproduct" onclick="deleteProduct(${id})">Delete</button>
          
      </div>
      </div>`;

        productsList.appendChild(card);
        // let deleteproduct = document.getElementById("deleteproduct");
        // deleteproduct.addEventListener("click", () => {
        //   //deleting function
        //   fetch(`http://localhost:3000/products/${element.id}`, {
        //     method: "DELETE",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   });
        // });
        return card;

        // //create functionality
        // let form=document.getElementById("newProduct")
        // form.addEventListener("submit", (event) => {
        //   event.preventDefault()
        //   // let formData=new FormData(form);
        //   // console.log(formData.get('price'))

        //   // let data=Object.fromEntries(formData);
        //   // let jsonData=JSON.stringify(data);
        //   let productname = document.getElementById("productName")
        //   let imageURL = document.getElementById("img")
        //   let description = document.getElementById("description")
        //   let price = document.getElementById("price")
        //   let quantity = document.getElementById("quantity")

        // fetch('http://localhost:3000/products', {
        //   method: 'POST',
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({
        //     productname:productname,
        //     price:price,
        //     descrpition:description,
        //     quantity:quantity,
        //     img:imageURL
        //   }),
        //   })
        // })

        // .then(res => res.json())
        // .then(data => {
        //   console.log(data);

        // })
        // .catch(error => console.error(error));
      });

      //Update function
      function update(id) {   
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              price: 89.99
            })
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => console.error(error));
    }
    

      

      // document.addEventListener("DOMContentLoaded", fetchData)

      // const fetchData = () => {
      //   fetch('http://localhost:3000/products')
      // .then(res => res.json())
      // .then((data) => {
      //   console.log(data)

      //   data.forEach(element => {

      //   })

      // }

      // fetch('http://localhost:3000/products')
      // .then(res => res.json())
      // .then((data) => {
      //   console.log(data)
      //   // const products=data;
      //   data.forEach(product => {
      //   const productsList=document.querySelector("#products")

      //   let card = document.createElement("li")
      //   card.innerHTML = `
      //       <div class='cart-item'>
      //       <div class='row-img'>
      //       <img class='rowing' src='${product.img}'>
      //       <p style='font-size: 12px;'>${product.productname}</p>
      //       <h2 style='font-size: 15px;'>${product.price}.oo</h2>+
      //       <i class='fa-solid fa-trash'onClick='delElement("+(j++)+")'></i></div>"
      //       `;

      //   productsList.appendChild(card)
      //   return card

      // for(let i=0;i<products.length;i++){

      // console.log(data[i].price)

      // }

      
      // const categories = [
      //   ...new Set(
      //     product.map((item) => {
      //       return item;
      //     })
      //   ),
      // ];
      // let i = 0;
      // document.getElementById("root").innerHTML = categories
      //   .map((item) => {
      //     // I want to display the image,productname and price
      //     var { img, productname, price, quantity, descrpition } = item;
      //     return `<div class='box'>
      //             <div class='img-box'>
      //                 <img class='img' src='${img}'></img>
      //             </div>
      //             <div class='bottom'>
      //                 <p>${productname}</p>
      //                 <h2>${price}.00</h2>

      //                 <button onclick="addtocart(${i})">Add to cart</button>
      //             </div>
      //         </div>`;
      //   })
      //   .join("");
      // let cart = [];

      // function addtocart(a) {
      //   cart.push({ ...categories[a] });
      //   displayCart();
      // }
      // fetch('/cart', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     action: 'addtocart',
      //     itemIndex: a
      //   })
      // })
      // .then(response => {
      //   // Handle response
      //   console.log('Response:', response);
      // })
      // .catch(error => {
      //   // Handle error
      //   console.error('Error:', error);
      // });

      // function delElement(a) {
      //   cart.splice(a, 1);
      //   displayCart();
      // }

      // function displayCart(a) {
      //   let j = 0,
      //     total = 0;
      //   document.getElementById("count").innerHTML = cart.length;
      //   {
      //     if (cart.length == 0) {
      //       document.getElementById("cartItem").innerHTML = "Start shopping";
      //       document.getElementById("total").innerHTML = "Kshs" + 0 + ".00";
      //     } else {
      //       document.getElementById("cartItem").innerHTML = cart
      //         .map((item) => {
      //           let { img, productname, price } = items;
      //           total = total + price;
      //           document.getElementById("total").innerHTML = "Kshs " + total + ".00";
      //           return `
      //                 <div class='cart-item'>
      //                 <div class='row-img'>
      //                 <img class='rowing' src='${img}'>
      //                 <p style='font-size: 12px;'>${productname}</p>
      //                 <h2 style='font-size: 15px;'>${price}.oo</h2>+
      //                 <i class='fa-solid fa-trash'onClick='delElement("+(j++)+")'></i></div>"
      //                 `;
      //         })
      //         .join("");
      //     }
      //   }
      // }

      // }
      // )

      // })

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
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.error(error));

    });
});

//delete function
function deleteProduct(id){

  console.log(`Hello World ${id}`)
  fetch(`http://localhost:3000/products/${id}`, {
          method: 'DELETE',
          headers:{
            "Content-Type":"application/json"
          }
        })
  
}