let body = document.getElementById("body");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((res) => {
    box(res);
  });
let box = (res) => {
  console.log(res);
  res.forEach((e) => {
    let image1 = document.createElement("img");
    let top = document.createElement("div");
    let div1 = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let a1 = document.createElement("a");

    // top.className = "topdiv";
    div1.className = "w3-card";
    // p1.className = "text";
    // p2.className = "num";
    // p3.className = "num";
    // p4.className = "num";
    // a1.className = "linkbody";
    image1.src = e.image;
    div1.append(image1);
    body.append(div1);
  });
};
