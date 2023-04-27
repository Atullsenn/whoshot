import React,{useState,useEffect} from 'react';
import './privacyPolicy.css';
import axios from 'axios';
import { URL } from '../../url/url';

const TermsConditionView = () => {

  const [getTerms, setTerms] = useState([])

  const termsCondition = async()=>{
    await axios.get(URL + '/web/api/getTerms',{
      Accept: "Application",
      "Content-Type": "application/json"
    }).then((res)=>{
      setTerms(res.data.data)
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
     <h2>Terms & Conditions</h2>
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
    
   <h2>Who Shot Terms & Conditions</h2>
   <p>{getTerms.heading}</p>
   </div>
  </div> 
  <div class="col-lg-12 col-md-12 col-sm-12">
   <div class="privacy-policy-text-area">

   <div
       dangerouslySetInnerHTML={{ __html: getTerms.description }}>
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

export default TermsConditionView