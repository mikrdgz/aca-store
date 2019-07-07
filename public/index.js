
const prods = document.getElementById("prods");
//const userVal =  document.getElementById("myInput").value


const searchID = [];

products.map(arr => 
    prods.innerHTML += `<div>
    <br>
    <img src="${arr.imgUrl}"/>
    <br>
    ${arr.name}
    <br>
    ${arr.description}
    </div>
    <br><button onclick="showMore()">View More</button><br>`
   )


function findProd(){

    const userVal = document.getElementById("myInput").value.toLowerCase();
    
for (let i = 0; i < products.length; i++){

    const prodQuery = products[i].name.toLowerCase();

 if(userVal == prodQuery){
 document.getElementById("message").innerHTML =  `<img src=${products[i].imgUrl}></img><br>${products[i].name}<br>${products[i].description}<br><button onclick="showMore()">View More</button><br>`
 searchID.push(`${products[i].id}`);

}
  }
  prods.setAttribute("style", "display: none;");

}
  

function showMore() {
for (let i = 0; i<products.length; i++){
    if (searchID == products[i].id){
        console.log(products[i].price, products[i].name)
        document.getElementById("message").innerHTML = `<img src=${products[i].imgUrl}></img><br>${products[i].name}<br>${products[i].description}<br>${products[i].price}<br>${products[i].category}`
    }
}

}