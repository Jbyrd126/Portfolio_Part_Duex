// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
const navStyle = {
  backgroundImage: 'url("/src/assets/images/tapper.gif")', 
  backgroundSize: 'fill',
  height: '250px',
  backgroundRepeat: 'no-repeat'

};

  return (
    
    
    <ul className="d-flex justify-content-end nav nav-pills" style={navStyle}>
      {/* <h1 classNme="justify-content-start nav"> Yoooooo dfgsdagdsgdsfgdfsgdfgdsgsdgdsfgdsfgdsfgsdfg</h1> */}
      <li className="nav-item m-1">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (Quinton Terntiary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item m-1">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item m-1">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item m-1">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  
  );
}

export default NavTabs;
