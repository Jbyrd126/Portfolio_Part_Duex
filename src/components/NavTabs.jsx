// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  const navStyle = {
    backgroundImage:
      'url("/src/assets/images/colors.gif")',
    backgroundSize: "cover",
    height: "150px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <ul className="d-flex justify-content-end nav m-auto" style={navStyle}>
      <li className="nav-item mt-3 mx-2">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (Quinton Terntiary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          style={{
            fontSize: "30px",
            transition: "color 0.3s, font-size 0.3s", 
            color: "black",
           
          }}

          onMouseOver={(e) => {
            e.target.classList.add("hovered-link"); 
            e.target.classList.add("pulsate-animation"); 
          }}
          onMouseOut={(e) => {
            e.target.classList.remove("hovered-link"); 
            e.target.classList.remove("pulsate-animation");
          }}

        >
          Home
        </a>
      </li>
      <li className="nav-item mt-3 mx-2">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
          style={{
            fontSize: "30px",
            transition: "color 0.3s, font-size 0.3s", 
            color: "black",
            
          }}
        

          onMouseOver={(e) => {
            e.target.classList.add("hovered-link"); 
            e.target.classList.add("pulsate-animation"); 
          }}
          onMouseOut={(e) => {
            e.target.classList.remove("hovered-link"); 
            e.target.classList.remove("pulsate-animation");
          }}



        >
          About
        </a>
      </li>
      <li className="nav-item mt-3 mx-2">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          style={{
            fontSize: "30px",
            transition: "color 0.3s, font-size 0.3s", 
            color: "black",
           
          }}

          onMouseOver={(e) => {
            e.target.classList.add("hovered-link"); 
            e.target.classList.add("pulsate-animation"); 
          }}
          onMouseOut={(e) => {
            e.target.classList.remove("hovered-link"); 
            e.target.classList.remove("pulsate-animation");
          }}


        >
        Resume
        </a>
      </li>
      <li className="nav-item mt-3 mx-2">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          style={{
            fontSize: "30px",
            transition: "color 0.3s, font-size 0.3s", 
            color: "black",
           
          }}

          onMouseOver={(e) => {
            e.target.classList.add("hovered-link"); 
            e.target.classList.add("pulsate-animation"); 
          }}
          onMouseOut={(e) => {
            e.target.classList.remove("hovered-link"); 
            e.target.classList.remove("pulsate-animation");
          }}


        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
