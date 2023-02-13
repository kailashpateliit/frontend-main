import React from 'react';
import "./profile.css"

const Profile = () => {
    return (
         <>
         <div className="Profile" style={{padding:"5rem"}}>
            <div className="d-flex">
              <div>
                <div>
                  <img src='front.png' alt="profilephoto" />
                </div>
                <div>
                  <h1 style={{ paddingLeft: "7rem",paddingTop:"3rem" }}>Profile Name</h1>
                </div>
              </div>
              <div className="deatils" style={{paddingLeft:"3rem",paddingTop:"1rem"}}>
                <h4>Name :</h4>
                <div className='h4valadiv'>
                    <h4>Amigos Team</h4>
                    <h4>E-Mail :</h4>
                    <h4>amigos@mmdu.com</h4>
                    <h4>Contact :</h4>
                    <h4>+91 XXXXXXX123</h4>
                    <h4>Address :</h4>
                    <h4>A-123,Wall Street,New York</h4>
                </div>
                

                
              </div>
            </div>
          </div>
          </> 
    );
}
 
export default Profile;