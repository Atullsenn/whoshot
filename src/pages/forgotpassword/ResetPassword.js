import React,{useState} from 'react';
import logoNew from "../../images/logoNew.png";
import useStyles from "../login/styles";
import axios from 'axios';
import { URL } from '../../url/url';
import { toast } from "react-toastify";

const ResetPassword = () => {
    var classes = useStyles();

    const [newpassword, setNewpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

  //change password
  const changePassword = async () => {
   if (newpassword == ""){
       toast.warn("Please enter New Password");
    }
    // If confirm password not entered
    else if (confirmpassword == ""){
       toast.warn("Please enter confirm password");
    }
    // If Not same return False.
    else if (newpassword != confirmpassword) {
      toast.warn("Password did not match: Please try again...");
      return false;
    }

    // If same return True.
    else {
      let reqq = {
        id: 1,
        // password: password,
        newpassword: newpassword,
      };
      
      await axios.post(URL + "/web/api/changePassword", reqq, {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      })
        .then((res) => {
        if(res.data.success == true){
          toast.success(res.data.message);
        }
        else{
          toast.error(res.data.message);
        }
       
        }).catch((error) => {
          console.log(error)
        });
    }

    // setPassword("");
    // setNewpassword("");
    // setConfirmpassword("");
  };

  return (
    <>
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        <div class="forget-password-detail-area">
          <div
            class="forget-password-left-area"
            style={{ margin: "20px , 0px" }}
          >
            <div
              style={{
                background: "#fff",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logoNew}
                alt="logo"
                className={classes.logotypeImage}
                style={{ width: "500px", paddingTop: "10px" }}
              />
            </div>
          </div>
          <div class="forget-password-input-area">
          <div className='col' style={{marginTop: '123px'}}>
            <div style={{border: '2px solid white', height: '400px'}}>
         <div class="logo">
          {/* <img src={logoNew} alt="logo"/> */}
          <h1>Reset Password</h1>
          </div> 
          <div className='col' style={{padding: '20px'}}>
            <input type='password' onChange={(e)=>{setNewpassword(e.target.value)}} class="form-control mb-3 " style={{border: '2px solid white', height: '50px', borderRadius: '5px', color: 'white'}} placeholder='Password'></input>
          
            <input type='password' onChange={(e)=>{setConfirmpassword(e.target.value)}}  class="form-control mb-3" style={{border: '2px solid white',  height: '50px', borderRadius: '5px', color: 'white'}} placeholder='Confirm Password'></input>

           
          </div>
          <button type='submit' onClick={changePassword} className='submitbtn'>Reset Password</button>
          </div>
    
    </div>
            <div class="footer-copyright-main-area">
              <p>© 2023 Who Shot, LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword