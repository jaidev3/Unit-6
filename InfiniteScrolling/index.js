var con = document.querySelector("#container");
var line=0;


function run(){
fetch("./db.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(let i=0;i<25;i++){
        let name = document.createElement("h1");
        name.classList.add("mystyle");
        name.innerText = data.user[line++].first_name;
        con.append(name);
         }
  });
}



con.addEventListener('scroll', function() {
    if (con.scrollTop + con.clientHeight >= con.scrollHeight) {
        run();
    }
  });

  run();