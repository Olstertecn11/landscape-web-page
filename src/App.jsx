import './App.css';
import Nav from './components/Nav';
import img from './components/imgs/undraw_gardening_re_e658.svg';

function App() {
  return (
    <>
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
      

      <div className="container">
      	<div className="row">
	  <div className="col">
	    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis atque animi quos assumenda nulla cum maxime suscipit quae veritatis, voluptas unde tempora distinctio adipisci dolores alias molestias laborum culpa nobis!</p>
	    <a href="#" className="btn btn-success text-white">Read More</a>
	  </div>
	  <div className="col">
	    <img className="img" src={img} width={200} alt=""/>
	  </div>
	</div>
      </div>
      
      <div className="circle">
      </div>
    </>
  );
}

export default App;
