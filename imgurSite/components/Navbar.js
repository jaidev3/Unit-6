function Navbar() {
  return `
    <div className="navbar">
    <navbar> 
      <a href="#">
        <div>
        <img src="../images/favicon-32x32.png" alt="home" >
        </div>
      </a>

      <div class="dropdown">
        <button class="dropbtn">
        <div class=down> 
       MOST VIRAL
          <img src="../images/drop-down-arrow.png" alt="" >
          </div> 
        </button>
        <div class="dropdown-content">
          <a href="#"> <h1>MOST VIRAL </h1> </a>
          <a href="#">  <h1>USER SUBMITTED </h1>  </a>
          <a href="#">   <h1>   HIGHEST SCORING </h1></a>
        </div>
      </div>
     
  <div class= "search">  
        <input   type="search" placeholder=" search..."  /> 
        <img src="../images/icons8-search-32.png" alt" " />
      </div>
       <div class="dropdown">
        <button class="dropbtn">
        <div class=down> 
      NEWEST
          <img src="../images/drop-down-arrow.png" alt="" >
          </div> 
        </button>
        <div class="dropdown-content">
          <a href="#"> <h1>POPULAR </h1> </a>
          <a href="#">  <h1>NEWEST </h1>  </a>
          <a href="#">   <h1> BEST </h1></a>
          <a href="#">   <h1> RANDOM </h1></a>

        </div>
      </div>
      <a href="#">
        <img src="../images/content-creator.png" alt="content " >
      </a>
      <a href="#">
     <img src="../images/content-creator.png" alt="autoplay" >
      </a>
      <a href="#">
       <img src="../images/content-creator.png" alt=" waterfall" >
      </a>
      <a href="#">
        <h1>Signup</h1>
      </a>
      </navbar> 
    </div>
    `;
}

export default Navbar;
