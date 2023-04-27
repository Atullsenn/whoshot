import React,{useState, useEffect} from 'react'
import Logo2 from "../../images/Logo2.png"
import logoNew from "../../images/logoNew.png";
import "./changepassword.css";
import { URL } from '../../url/url';
import axios from 'axios';
import { toast } from "react-toastify";

const ChangePassword = () => {

  // const resetPassword = async()=>{
  //   await axios.post(URL + '/web/api/changePassword')
  // }
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



  //change password
  return (
    <div className='containterr'>
    <div className='col w-50 mx-auto ' style={{width: '50%',height: '500px', border: '3px groove  black', outline: '3px groove black', outlineOffset: '5px', borderRadius: '10px', marginTop: '50px', backgroundColor: 'none'}}>
         <div class="logo">
          {/* <img src={logoNew} alt="logo"/> */}
          <h1>Reset Password</h1>
          </div> 
          <div className='col' style={{padding: '20px'}}>
            <input type='text' onChange={(e)=>{setNewpassword(e.target.value)}} class="form-control mb-3 " style={{border: '2px solid black', height: '50px', borderRadius: '5px'}} placeholder='Password'></input>
          
            <input type='text' onChange={(e)=>{setConfirmpassword(e.target.value)}} class="form-control mb-3" style={{border: '2px solid black',  height: '50px', borderRadius: '5px'}} placeholder='Confirm Password'></input>

           
          </div>
          <button type='submit' onClick={changePassword} className='submitbtn'>Reset Password</button>
    
    </div>
    </div>
  )
}

export default ChangePassword