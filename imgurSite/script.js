let body = document.getElementById("body");
var timeId;

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

function debounce(func, delay) {
  if (timeId) {
    clearInterval(timeId);
  }

  timeId = setTimeout(() => {
    func();
  }, delay);
}

async function main() {
  let name = document.getElementById("in").value;
  if (name.length > 0) {
    let res = await search(name);
    let data = res.Search;
    listAppend(data);
  } else {
    list_box.style.visibility = "hidden";
  }
}

async function search(name) {
  try {
    let res = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=4b125d6`);
    let data = await res.json();
    return data;
  } catch (e) {
    console.log("Error: " + e);
  }
}

function listAppend(data) {
  var list_box = document.getElementById("search-items");
  list_box.style.visibility = "visible";
  list_box.innerHTML = null;
  data.forEach((a) => {
    let list = document.createElement("li");
    list.textContent = a.Title;
    list_box.append(list);
  });
}
