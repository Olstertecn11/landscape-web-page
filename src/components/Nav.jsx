import './styles/navbar.css';
import img from './imgs/logo.jpeg';

const Nav = ()=>{
  return(
    <>
      <nav className="navbar navbar-expand-lg">
	<a className="navbar-brand" href="#"><img src={img} className='logo'/>  Landscaping</a>
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
	  <span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse" id="navbarText">
	  <ul className="navbar-nav ml-auto">
	    <li className="nav-item active">
	      <a className="nav-link" href="#">Home</a>
	    </li>
	    <li className="nav-item">
	      <a className="nav-link" href="#">Services</a>
	    </li>
	    <li className="nav-item">
	      <a className="nav-link" href="#">Gallery</a>
	    </li>
	    <li className="nav-item">
	      <a className="nav-link" href="#">Contact</a>
	    </li>
	  </ul>
	</div>
      </nav>
    </>
  );
}

export default Nav;
