import React,{useState, useEffect} from 'react';
import "./privacyPolicy.css";
import axios from 'axios';
import { URL } from '../../url/url';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import FmdGoodIcon from '@mui/icons-material/FmdGood';


const ContactUsView = () => {
  
  const [getContact, setContact] = useState([])

  const termsCondition = async()=>{
    await axios.get(URL + '/web/api/getContact',{
      Accept: "Application",
      "Content-Type": "application/json"
    }).then((res)=>{
      setContact(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    termsCondition()

  },[])
  return (
    <>
       <section className="inner-banner-detail-area responsive">
 <div className="container">
  <div className="row">
   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="breadcrum-info-title">
     <h2>Contact Us</h2>
    </div> 
   </div> 
  </div>  
 </div> 
</section>


<section className="privacy-policy-detail-area">
<div className="container">
 <div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12">
   <div className="privacy-policy-heading-info">
    
   <h2>Who Shot Contact Us</h2>
   <p>Contact Us Updated On 1 January 2023</p>
   </div>
  </div> 
  <div class="col-lg-12 col-md-12 col-sm-12">
   <div class="privacy-policy-text-area" >
{/* <div style={{borderRadius: "18px", textAlign: "center", fontSize: "25px", fontFamily: "monospace", backgroundColor: " #92a8d1", color: "white"}}>
   <p>phone: {getContact.phone}</p><br></br>
  <p>email: {getContact.email}</p><br></br>
  <p>address: {getContact.address}</p><br></br> 
</div> */}

<div className='box-container'>
  <div className='box'>
  <div className='box-1'>
  <div className='icon'>
    <CallIcon style={{width: '50px', height: '50px', border: '2px solid gray', padding: '10px', borderRadius: '50px', backgroundColor: '#818622', color: '#fff'}}/>
    </div>
    <span className='spn'>Phone</span>
    <p>{getContact.phone}</p>
   
  </div>
  <div className='box-2'>
  <div className='icon'>
    <FmdGoodIcon style={{width: '50px', height: '50px', border: '2px solid gray', padding: '10px', borderRadius: '50px', backgroundColor: '#818622', color: '#fff'}}/>
    </div>
    <span className='spn'>Address</span>
    <p>{getContact.address}</p>
    
  </div>
  <div className='box-3'>
    <div className='icon'>
    <EmailIcon style={{width: '50px', height: '50px', border: '2px solid gray', padding: '10px', borderRadius: '50px', backgroundColor: '#818622', color: '#fff'}}/>
    </div>
    <span className='spn'>Email</span>
    <p>{getContact.email}</p>
    
  </div>
  </div>
</div>
 
   </div>
  </div>
 </div>
 <div className='footer-resoponsivee'>
 <footer className="footer-resoponsive"> © 2023 Who Shot, LLC. All rights reserved.
        </footer>
 </div>
 
</div> 
</section>
      
    </>
  )
}

export default ContactUsView