import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Success from 'components/success/success';


const Providerdashboard = ({user}) => {
    const [Orders,setOrders]=useState([]);
    const [error,setError]=useState("");
    const [flag,setFlag]=useState(false);
    const getOrders=async()=>{
        await axios.get(`http://localhost:5000/provider/order/${user.uid}`)
        .then(res=>{
            setOrders(JSON.stringify(res.data));
            const Data={...res.data[0]};
            console.log(Data);
            const array={...Data.orders};
            setOrders(array);
            setFlag(true);
        })
        .catch(err=>{
            console.log(err);
        })

    }
    useEffect(()=>{
        getOrders();
    },[])
    console.log(Orders);

    return ( 
        <>
        <div className="m-2">
        {Object.values(Orders).map((order)=>(
            <div class="card m-2" style={{width: '18rem'}}>
            <img class="card-img-top" src="..." alt="Cardcap"/>
            <div class="card-body">
              <h5 class="card-title">{order.Name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
        </div>
         
        </>
     );
}
 
export default Providerdashboard;