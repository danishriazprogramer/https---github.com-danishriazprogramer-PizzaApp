//const session = require("express-session");
let totalQty=document.getElementById("totalQty")
let allSelectMenu= document.querySelectorAll(".selectMenu");


allSelectMenu.forEach((singleMenu)=>{

singleMenu.addEventListener("change",(e)=>{

    console.log("ok")
    let ProductId=singleMenu.children;
    console.log(ProductId)
     let selectedSizeName;
      let proid=singleMenu.parentElement.firstElementChild.value
      let second=singleMenu.parentElement.firstElementChild.nextElementSibling;
      console.log(second)
      console.log(proid)
    for(let i=0;i<ProductId.length;i++)
    {
        if(ProductId[i].selected){
            selectedSizeName=ProductId[i].value;
console.log(ProductId[i])
        }
    }
    console.log(selectedSizeName)


    $.post("/sizePricing",
            {
                ProductId:selectedSizeName,
                proid:proid
            },
            function (data, status) {
                    proPrice=data.sizePricing;
                    console.log("sizePricing is");
                    console.log(data.sizePricing)

                    //totalPrice.innerText=data.productCart.totalPrice;
                    //console.log(data.productCart)
                  
                    second.innerHTML="$"+data.sizePricing

            });
      
     
})


})


//order ajex requst

// isAdded
let isAdded;

let allProducts=document.querySelectorAll(".ProductAdd");
console.log(allProducts)

allProducts.forEach((btn)=>{

btn.addEventListener('click',(e)=>{

    console.log(e)
    //let ProductId=document.querySelector(".ProductId")
    //let pizzaSize =singleMenu.children;
    console.log(btn.parentElement)
    let ProductId=btn.parentElement.firstElementChild.value;
    let selectedSizeName;
    console.log(btn.parentElement.firstElementChild.nextElementSibling)
    let productPrice= btn.parentElement.firstElementChild.nextElementSibling.innerHTML;
   
    console.log(productPrice)
    
    let pizzaSize=btn.parentElement.lastElementChild.children;
    console.log(ProductId)
    console.log(pizzaSize)
    for(let i=0;i<pizzaSize.length;i++)
    {
        if(pizzaSize[i].selected){
            selectedSizeName=pizzaSize[i].innerHTML;
console.log(pizzaSize[i])
        }
    }    
   // let proPrice=document.getElementById("totalQuantity").innerHTML;
   // let totalPrice=document.getElementById("totalPrice").innerHTML;

    //console.log(proPrice)
    //console.log(totalPrice)
    

    $.post("/addToCart",
            {
                ProductId:ProductId,
                productPrice:productPrice,
                selectedSizeName:selectedSizeName
            },
            function (data, status) {
                   // proPrice=data.productCart.totalQty;
                  //  totalPrice.innerText=data.productCart.totalPrice;
                  //  console.log(data.productCart)
                   // document.getElementById("totalQan").innerText=data.productCart;
                   isAdded=data.isAdded
                    console.log(isAdded)
                    totalQty.innerText=data.totalQty;        
                    if(isAdded==true){
                    
                        Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'Your Pizza has been Added',
                          showConfirmButton: false,
                          iconColor: 'white',
                          background:"#ffc107",
                          timer: 2000
                        })
 
                    }
                            
            });
          

        

    
})    
})
console.log(isAdded)





// all product data ajex requst


let allTypeProducts=document.querySelectorAll(".allProductData");
console.log(allTypeProducts)

allTypeProducts.forEach((btn)=>{

btn.addEventListener('click',(e)=>{

    console.log(e)
    //let ProductId=document.querySelector(".ProductId")
    //let pizzaSize =singleMenu.children;
    console.log(btn.parentElement)
    let ProductId=btn.parentElement.firstElementChild.value;
    let selectedSizeName;
    console.log(btn.parentElement.firstElementChild.nextElementSibling)
    let productPrice= btn.parentElement.firstElementChild.nextElementSibling.innerHTML;
   
    console.log(productPrice)
    
    let pizzaSize=btn.parentElement.lastElementChild.children;
    console.log(ProductId)
    console.log(pizzaSize)
    for(let i=0;i<pizzaSize.length;i++)
    {
        if(pizzaSize[i].selected){
            selectedSizeName=pizzaSize[i].innerHTML;
console.log(pizzaSize[i])
        }
    }    
   // let proPrice=document.getElementById("totalQuantity").innerHTML;
   // let totalPrice=document.getElementById("totalPrice").innerHTML;

    //console.log(proPrice)
    //console.log(totalPrice)
    

    $.post("/addToCartTypeProduct",
            {
                ProductId:ProductId,
                productPrice:productPrice,
                selectedSizeName:selectedSizeName
            },
            function (data, status) {
                   // proPrice=data.productCart.totalQty;
                  //  totalPrice.innerText=data.productCart.totalPrice;
                  //  console.log(data.productCart)
                   // document.getElementById("totalQan").innerText=data.productCart;
                   isAdded=data.isAdded
                    console.log(isAdded)
                    totalQty.innerText=data.totalQty;
                    if(isAdded==true){
                    
                        Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'Your Pizza has been Added',
                          showConfirmButton: false,
                          iconColor: 'white',
                          background:"#ffc107",
                          timer: 2000
                        })
 
                    }
                            
            });
          

        

    
})    
})



console.log("ok the consle is running");