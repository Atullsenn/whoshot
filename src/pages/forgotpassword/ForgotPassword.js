import React,{useState} from 'react';
import logoNew from "../../images/logoNew.png";
import useStyles from "../login/styles";
import axios from 'axios';
import { URL } from '../../url/url';
import { toast } from "react-toastify";

const ForgotPassword = () => {
    var classes = useStyles();
    const [email, setEmail] = useState([])

    const forgotPassword = (e) => {
      let data = {email}
     
      fetch(URL + '/web/api/forgotPassword', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
      }).then((result) => {
        result.json().then((data) => {
          if(result.status === 400){
            toast.warn("Please Provide Your Email")
          }
          else if(result.status === 201){
            toast.error("Please Enter Valid Email")
          }
          else{
            toast.success("Email Sent Successfully")
          }
          
        })
      }).catch((error) => {
        console.log(error)
      })
    }
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
            <h2>Trouble Logging In?</h2>
            <p>
              Please provide your email address that you used when you signed up
              for your account. We will send you an email that will allow you to
              reset your password.
            </p>
            <input
            style={{
              color: '#ffffff'
            }
            }
              type="text"
              id="fname"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="fname"
              class="form-control"
              placeholder="Enter Email ID"
            />
            <div class="email-submit-btn-area">
              <a
                href="#/forgot-password"
                onClick={forgotPassword}
                class="email-submit-btn"
              >
                Submit
              </a>
            </div>
            <div class="footer-copyright-main-area">
              <p>© 2023 Who Shot, LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword