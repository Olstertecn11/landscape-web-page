import './App.css';
import Nav from './components/Nav';
import Sections from './components/Sections';
import img from './components/imgs/undraw_gardening_re_e658.svg';

function App() {
  return (
    <div className='main bg-image'>
      <Nav />
      <div className="container title-container">
	<div className="row">
	  <div className="col">
	    <p className="title">
	      Your landscape cared for the way they should be
	      by 
	      <b className="name">Rodriguez Landscaping</b>
	    </p>
	  </div>
	  <div className="col">
	  </div>
	</div>
      </div>
      

      <div className="container container-description">
      	<div className="row">
	  <div className="col">
	    <p>
	      Our lawn and landscape maintenance services are customizable to your needs including: 
	      lawn mowing, landscape maintenance, shrub trimming, bed weeding, property clean ups, and leaf 
	      removal services.We strive to provide the best lawn care in. Maryland, Virginia and washington 
	      If you have a property needing lawn service please contact us.
	    </p>
	    <a href="#" className="btn btn-read text-white">Read More</a>
	  </div>
	  <div className="col image-column">
	    <img className="img" src={img} width={200} alt=""/>
	  </div>
	</div>
      </div>
      
      <div className="circle">
      </div>
      <Sections />
    </div>
  );
}

export default App;
