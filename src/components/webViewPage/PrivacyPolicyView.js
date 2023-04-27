import React,{useState, useEffect} from 'react';
import './privacyPolicy.css'
import axios from 'axios';
import { URL } from '../../url/url';

const PrivacyPolicyView = () => {
  const [getPrivacy, setPrivacy] = useState([])

  const getPrivacyPolicy = async()=>{
    await axios.get(URL + '/web/api/getPrivacy',{
      Accept: 'Application',
      'content-Type': 'application/json'
    }).then((res)=>{
      setPrivacy(res.data.data)
      
    }).catch(err=>{
      console.log(err)
    })
  }


  
    useEffect(()=>{
      getPrivacyPolicy()
    },[])
  
 

  console.log(getPrivacy)
  return (
    <>
       <section className="inner-banner-detail-area">
    <div className="container">
     <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
       <div className="breadcrum-info-title">
        <h2>Privacy & Policy</h2>
       </div> 
      </div> 
     </div>  
    </div> 
  </section>
  
  
  <section className="privacy-policy-detail-area">
    {/* {getPrivacy.map((item,i)=>( */}

     
   <div className="container">
   
       
    <div className="row">
      
      
     <div className="col-lg-12 col-md-12 col-sm-12">
      <div className="privacy-policy-heading-info">
       
         <h2>Who Shot Privacy & Policy </h2>
         <p>{getPrivacy.heading}</p>
      </div>
     </div> 
     <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="privacy-policy-text-area">

      
       
       <div
       dangerouslySetInnerHTML={{ __html: getPrivacy.description }}>
       </div>
  
      </div>
     </div>
    </div>
    <div className='footer-resoponsivee'>
 <footer className="footer-resoponsive"> © 2023 Who Shot, LLC. All rights reserved.
        </footer>
 </div>
   </div> 
  
     {/* ))}  */}
   {/* </div> */}
  </section>
  </>
  )
}

export default PrivacyPolicyView