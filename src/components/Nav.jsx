import './styles/navbar.css';
import img from './imgs/logo.jpeg';

const Nav = ()=>{
  return(
    <>
      <nav class="navbar">
	<div class="container-fluid">
	  <a class="navbar-brand"> <img src={img} alt="" className="logo" /> </a>
	  <form class="mx-right buttons-form">
	    <button class="btn btn-outline-success" type="submit">Home</button>
	    <button class="btn btn-outline-success" type="submit">Gallery</button>
	    <button class="btn btn-outline-success" type="submit">Services</button>
	    <button class="btn btn-outline-success" type="submit">Contact</button>
	  </form>
	</div>
      </nav>
    </>
  );
}

export default Nav;
