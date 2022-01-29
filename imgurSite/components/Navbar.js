function Navbar() {
  return `
    <div className="navbar">
    <nav> 
      <a href="#">
        <div>
        <img  width="40px" src="./images/favicon-32x32.png" alt="home" >
        </div>
      </a>

      <div class="dropdown">
        <button class="dropbtn">
        <div class=down> 
       MOST VIRAL
          <img width="25px"  src="./images/drop-down-arrow.png" alt="" >
          </div> 
        </button>
        <div class="dropdown-content">
          <a href="#"> <h4>MOST VIRAL </h4> </a>
          <a href="#">  <h4>USER SUBMITTED </h4>  </a>
          <a href="#">   <h4>   HIGHEST SCORING </h4></a>
        </div>
      </div>
     
  <div class= "search">  
        <input  oninput="debounce(main,1000)" class="in" id="in" type="search" placeholder="Images,#tags,@user Oh my!"  /> 
        
        <img width="18px"  src="./images/icons8-search-32.png" alt" " />
      </div>
      <div class="search-items" id="search-items"></div>
       <div class="dropdown">
        <button class="dropbtn">
        <div class=down> 
      NEWEST
          <img  width="30px" src="./images/drop-down-arrow.png" alt="drop" />
          </div> 
        </button>
        <div class="dropdown-content">
          <a href="#"> <h3>POPULAR </h3> </a>
          <a href="#">  <h3>NEWEST </h3>  </a>
          <a href="#">   <h3> BEST </h3></a>
          <a href="#">   <h3> RANDOM </h3></a>

        </div>
      </div>
      <a href="#">
        <img  class="Image" src="./images/icons8-cinema-film-play-50.png" alt="content " >
      </a>
      <a href="#">
     <img  class="Image" src="./images/content-creator.png" alt="autoplay" >
      </a>
      <a href="#">
       <img  class="Image" src="./images/icons8-waterfall-60.png" alt=" waterfall" >
      </a>
      <a href="#">
        <h5>Signup</h5>
      </a>
      </nav> 
    </div>
    `;
}

export default Navbar;
