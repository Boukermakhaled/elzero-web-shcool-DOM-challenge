//header 
let header = document.createElement("div");
header.innerHTML = "Abderrahmane";
header.style.padding = "10px";
header.style.fontWeight = "500";
header.style.fontFamily = "Rubik";
header.style.color = "#097969";
document.body.appendChild(header);
//container
let container = document.createElement("div");
document.body.appendChild(container);
//product
// product.innerHTML = "product";

for(let i = 1 ; i <= 15 ; i++){
    let product = document.createElement("div");
    product.style.display = "flex";
    product.style.justifyContent = "center";
    product.style.flexWrap = "wrap";
    product.style.alignItems = "center";
    product.style.padding = "20px";
    product.style.width = "180px";
    product.style.height = "100px";
    product.style.backgroundColor = "#fff";
    let des = document.createElement("p");
    des.style.display = "block";
    des.innerHTML = "product";
    des.style.color = "#c9c8c8";
    let ptxt = document.createElement("p");
    ptxt.style.display = "block";
    ptxt.style.textAlign = "center";
    ptxt.style.fontSize = "24px";
    ptxt.innerHTML = `${i}`;
    product.appendChild(ptxt);
    product.appendChild(des);
    container.appendChild(product);
    product.style.borderRadius = "7px";
    product.style.fontFamily = "Rubik";
}
container.style.background = "#eaefef";
container.style.display = "flex";
// container.style.width = "100%";
container.style.justifyContent = "center";
container.style.flexWrap = "wrap"
container.style.gap = "20px";
container.style.padding = "20px";
// let product = document.createElement("div");
// product.appendChild(ptxt);
// container.appendChild(product);

