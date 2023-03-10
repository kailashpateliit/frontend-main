import React,{useState,useRef,useEffect} from 'react';
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import Success from 'components/success/success';

  
  
const Client = ({user}) => {
    const {place_id}=useParams();
    
    const [ libraries ] = useState(['places']);

    const [client,setClient]=useState({
        MobNo: 0,
        Name: '', 
        Address: '' ,
        email: '',
        userId: user.uid,
        
    })
    const [view,setView]=useState(false);


    const handleChange=(e)=>{
        const { name, value } = e.target;
        setClient({...client,[name]: value})
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        await axios.patch(`http://localhost:5000/provider/${place_id}`,client)
        .then(res=>{
            console.log(res);
            console.log(client)
            setView(true);
        })
        .catch(error=>{
            console.log(error);
            alert("Either there is network Error or the for the given gas station there no such Provider Exist")
        })

        
    }
    useEffect(()=>{

    },[view])


    return ( 
        <>
       { !view&&   <div className='d-flex justify-content-center m-2 '>
        <form className=' w-50 bg-light p-4 formclass rounded'>
            <h1 className='text-info mb-4'>Enter your Details</h1>
            <div className="row">
                <div className="form-group col-md-6">
                <label>Name</label>
                <input type="text" className="form-control" name="Name"  onChange={handleChange}  placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" name="Email" onChange={handleChange} placeholder="Email" />
                </div>
            </div>
            <div className="form-group">
                <label >Orders</label>
                <input type="text" className="form-control" name="orders" onChange={handleChange} placeholder="Number of Order"/>
                <label >Contact no</label>
                <input type="text" className="form-control" name="MobNo" onChange={handleChange} placeholder="Enter Mob No"/>
                <label >Address</label>
                <input type="text" className="form-control" name="Address" onChange={handleChange} placeholder="Enter the Address"/>
                <label >Comment If any</label>
                <textarea type="text" className='form-control' name="comment" onChange={handleChange} placeholder="Comment" />
                
            </div>
            <div className='d-flex justify-content-center' style={{postion: 'relative'}}>

                
            </div>
                <button onClick={handleSubmit}  className="btn btn-primary my-4">Submit Detail</button>
            </form>
        </div>}
        { view && <Success redirect="payment" redirectMessage="Checkour your Order" message="Congratulation Your Order is successfully completed!"/>}
       
        </>

     );
}
 
export default Client;