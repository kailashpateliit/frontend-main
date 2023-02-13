import React, { Fragment,useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Media from 'react-media';
import './homepage.css'
import Topbar from 'components/Navbar/Navbar';
import { Obj,flowchart } from './Object';
import axios from 'axios';
import Chat from './Chat';
import {Row,Container,Col} from "react-bootstrap"


const Homepage = ({currentUser}) => {
    const [view,setView]=React.useState(false);
  
    const [message,setMessage]=React.useState({message: ''});
    const handleChange=(e)=>{
      setMessage({message: e.target.value});
    }
    const [chota, setChota] = useState(true);
    const switchView = () => { setView(!view) };


    const showChota = () => {
      if (window.innerWidth > 960) {
        setChota(false);
      } else {
        setChota(true);
      }
      };
    

      useEffect(() => {
        showChota();
      }, []);

    window.addEventListener("resize", showChota);

    return (
      <>
        {/* //Topbar */}
        <Topbar user={currentUser} />
        {chota&&<>


        </>}
        {!chota &&<>
          <div className='d-flex justify-content-center'>
               <div className='banner'>
                <div><img src='location.png' alt=".."/><h4>Locate</h4></div>
                <div><img src='charge.png' alt=".."/><h4>Book</h4></div>
                <div><img src='car.png' alt=".."/><h4>Swap</h4></div>
               </div>
            </div>
            
          <div className="samnevla">
            <div className="absimage my-2">
                  <img src="front.png"  alt=".."/> 

              <div className='samnevalacontent'>
                <div>
                  <h1 className="textsamneka">Get Charged<br/> Or Exchanged</h1><h2>Your Battery</h2>
                  <h5 className="w-50 purpose"> The web-app is to provide EV owner the convenience of locating charging stations on aerial map, exchange the batteries, recommendations on paying charges online!</h5>
                  <button className="btn btn-success btn-lg mt-4">Go to the station</button>
               
               </div>
              
          
              </div>
            </div>
          
            <div>
              <div className='bottom-banner'>

              </div>
            </div>
            

          </div>
          {/* <div className='nichevala'>
            <div className="">Never wait to change</div>
            <div className="circle"><img src='LOGO.png' style={{height: '6rem'}} alt="..."/></div>
            <div className="">Swap the full Battery in seconds</div>

          </div> */}
          

        </>
        

        }
      {/* //three cards  */}
      <div class="farmersay container">
        <h1 >Creating New Opportunities For Everyone</h1>
        <p style={{ marginBottom: '20px' }}>We are the first platform enabling increased benefits for farmers, retailers, and consumers.</p>
        {}

        <div class="row threecards">
          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className='cards' style={{ width: "18rem" ,textAlign: "left",marginTop: "30px"}}>
              <div class="benifits"  style={{padding: '10px'}} >
                <img src="question.png" alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>Farmer</h5>
                <ul>
                  <li>20% more revenue</li>
                  <li>One-stop-sale</li>
                  <li>Payment in 24 hours</li>
                  <li>Transparent weighing</li>
                 </ul>

              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className='cards' style={{ width: "18rem",marginTop: "30px"}}>
              <div class="benifits"  style={{padding: '10px',textAlign: "left"}} >
                <img src="money.png" alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>Retailer</h5>
                <ul>
                  <li>Competitive pricing</li>
                  <li>Doorstep delivery</li>
                  <li>quality graded produce</li>
                  <li>Convenient time saving</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className='cards' style={{ width: "18rem",marginTop: "30px" }}>
              <div class="benifits" style={{padding: '10px', textAlign: "left"}} >
                <img src="time.png" alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>customer</h5>
                <ul style={{paddingLeft: "20px"}}>
                  <li>20% more revenue</li>
                  <li>One-stop-sale</li>
                  <li>Payment in 24 hours</li>
                  <li>Transparent weighing</li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>

      </div>

      <div style={{backgroundColor: "#e0e0e0"}}>
          <div className='d-flex'>
            <div style={{ width: "60%" }} >
            
                <img src="roadmap.png"  class="w-100"  alt="..." />
            </div>

            <div >
                <div >
                  <h2 className='text-start' style={{color: "rgb(0 91 202)",marginBottom: '3rem'}}>Delievering <br />the latest technology</h2>
                <h4 className='text-start w-75 fw-light'> We are trying to make EV charging quick and convenient for you. Get access to our growing network of Public EV Charging points across the country on this Charge web app. Relax and enjoy your EV ride  no matter where you are going.</h4>
                <button className='btn btn-success btn-bg d-flex justify-content-center'>Book a slot</button>
                </div>
            </div>
          </div>
        </div>

        <div className='container'>
        {/* Container style={{ marginBottom: '100px', marginTop: '60px', textAlign: 'center' }} */}
        <Row style={{paddingTop: '30px'}}>
          <Col sm className=' d-flex justify-content-center' >
            <div  className='bottom' style={{width: '90%'}}>
            <div class=" mx-4">
            <h3>Trust Us With Your Harvest</h3>
            <p >Get fair prices for your produce from Urban Reach</p>
            </div>
            </div>
        
          </Col>
          <Col sm className=' d-flex justify-content-center'>
            <div className='bottom' style={{width: '95%'}}>
              <div class=" mx-2">
            <h3>Direct From Farms to Your Business</h3>
            <p >Get fair prices for your produce from Urban Reach</p>
            </div>
            </div>
          </Col>
        </Row>
      </div>



       

        <Footer />
      </>
    );
}
 
export default Homepage;

