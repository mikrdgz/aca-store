
const prods = document.getElementById("prods");
//const userVal =  document.getElementById("myInput").value


products.map(arr => 
    prods.innerHTML += `<div><img src="${arr.imgUrl}"/><br>${arr.name}<br>${arr.description}</div><br>`
   )


function findProd(){
    const userVal = document.getElementById("myInput").value.toLowerCase();
    
for (let i = 0; i < products.length; i++){

    const prodQuery = products[i].name.toLowerCase();

 if(userVal == prodQuery){
 document.getElementById("message").innerHTML =  `<img src=${products[i].imgUrl}></img><br>${products[i].name}<br>${products[i].description}`
} else {
    console.log(userVal, prodQuery)
    document.getElementById("message").innerHTML = "Not found"
}
  }
  prods.setAttribute("style", "display: none;");


}
  

