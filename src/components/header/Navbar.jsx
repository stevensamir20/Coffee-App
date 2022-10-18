function clickme(){
  alert('Welcome :)');
}

export const Navbar = () => {
  return (
    <nav className="nav">
      
    <a to="/" className="site-name">
      COFFEE SHOP
    </a>
    <ul>
      <li><a to="/home"  className="home-style">Home</a></li>
      <li><a to="/menu" className="site-title">Menu</a></li>
      <li><a to="/about" className="site-title">About</a></li>
      
      
    </ul>
    <button onClick={clickme} className="site-button">Join Now </button>
  </nav>
    
  )
}