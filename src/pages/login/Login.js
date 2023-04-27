import React, { useState } from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from '@mui/material/FilledInput';



import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter,Link } from "react-router-dom";
import useStyles from "./styles";
import logoNew from "../../images/logoNew.png"
import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props) {
  var classes = useStyles();
  var userDispatch = useUserDispatch();
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [loginValue, setLoginValue] = useState("mobappssolutions153@gmail.com");
  var [passwordValue, setPasswordValue] = useState("admin@123");
  

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  



  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer} >
        <img src={logoNew} alt="logo" className={classes.logotypeImage} />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <React.Fragment>
            <Fade in={error}>
              <Typography color="secondary" className={classes.errorMessage}>
                Something is wrong with your login or password :(
              </Typography>
            </Fade>
     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color:'#ffffff', fontFamily: 'monospace', textShadow: '5px 5px 4px #912c00'}}>
      <h1>Login</h1>
      </div>       

<FormControl  sx={{marginBottom: '20px',
      "& fieldset": { border: 'none', outline: 'none'},
    }} variant="outlined" style={{display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}} >
          <InputLabel htmlFor="outlined-adornment-password" style={{position:'relative', top: '15px', fontSize: '13px', left: '11px', width: '44ch', color: 'black'}}></InputLabel>
          <OutlinedInput
          style={{backgoundColor: '#fff !important', border: '2px groove white', borderRadius: '5px 10px 5px 10px', color: '#ffffff'}}
            id="outlined-adornment-password"
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
            type={'text'}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  // aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <EmailIcon style={{color: '#ffffff'}}/>
                  {/* {showPassword ? <VisibilityOff /> : <Visibility/>} */}
                </IconButton>
              </InputAdornment>
            }
            // value={loginValue}
            placeholder="Enter your email"
           
            
            
          />
        </FormControl>



<FormControl  sx={{
      "& fieldset": { border: 'none', outline: 'none' },
    }} variant="outlined" style={{display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}} >
          <InputLabel htmlFor="outlined-adornment-password" style={{position:'relative', top: '15px', fontSize: '13px', left: '11px', width: '44ch', color: 'black'}}></InputLabel>
          <OutlinedInput
          style={{backgoundColor: '#fff !important', border: '2px groove white', borderRadius: '5px 10px 5px 10px', color: '#ffffff'}}
            id="outlined-adornment-password"
            value={passwordValue}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPasswordValue(e.target.value)}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff style={{color: '#ffffff'}}/> : <Visibility style={{color: '#ffffff'}}/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            placeholder="Enter your password"
            
            
          />
        </FormControl>
       

            <div className={classes.formButtonsss} style={{ width: '70%', margin: '0 auto'}}>
              {isLoading ? (
                <CircularProgress size={26} className={classes.loginLoader} />
              ) : (
                <Button style={{marginTop: '20px'}}
                  className={classes.loginButton}
                  disabled={
                    loginValue.length === 0 || passwordValue.length === 0
                  }
                  onClick={() =>
                    loginUser(
                      userDispatch,
                      loginValue,
                      passwordValue,
                      props.history,
                      setIsLoading,
                      setError,
                    )
                  }
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Log In
                </Button>
              )}
            </div>
            <div style={{marginTop: '5px', fontSize: '16px', fontFamily:"vardana", fontWeight: "500", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Link
              style={{color: "red"}}
                to={'/forgot-password'}
                // color="primary"
                // size="large"
                // className={classes.forgetButton}
              >
                Forgot Password ?
              </Link>
            </div>
          </React.Fragment>
        </div>
        <Typography color="primary" className={classes.copyright}>
          © {new Date().getFullYear()}{" "}
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Who Shot
          </a>
          , LLC. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);


