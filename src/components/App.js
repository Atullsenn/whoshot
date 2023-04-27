import React from "react";
import { HashRouter,Route, Switch, Redirect } from "react-router-dom";


// components
import Layout from "./Layout";
// import AdminLayout from "./AdminLayout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

//webveiw pages for mobile
import AboutUsView from "./webViewPage/AboutUsView";
import ContactUsView from "./webViewPage/ContactUsView";
import PrivacyPolicyView from "./webViewPage/PrivacyPolicyView";
import TermsConditionView from "./webViewPage/TermsConditionView";

//forgot pages
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import ChangePassword from "../pages/forgotpassword/ChangePassword";
import ResetPassword from "../pages/forgotpassword/ResetPassword";

// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();
  var { isUserType } = useUserState();



  // if (isUserType == 0) {
    return (
      
      <HashRouter>
      
        <Switch>
        
          <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ChangePassword}/>
          <Route path="/resetnew-password" component={ResetPassword}/>
          <Route path="/mobile/about-us" component={AboutUsView}/>
          <Route path="/mobile/terms-and-condition" component={TermsConditionView}/>
          <Route path="/mobile/contact-us" component={ContactUsView} />
          <Route path="/mobile/privacy-policy" component={PrivacyPolicyView}/>
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dashboard" />}
          />
           
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute path="/login" component={Login} />
             
          <Route component={Error} />
        </Switch>
        
      </HashRouter>


    );
  //}



  // if (isUserType == 0) {
  //   return (

  //     <HashRouter>
      
  //       <Switch>
          
  //         <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
  //         <Route path="/forgotpassword" component={ForgotPassword} />
  //         <Route
  //           exact
  //           path="/app"
  //           render={() => <Redirect to="/app/dashboard" />}
  //         />
           
  //         <PrivateRoute path="/app" component={Layout} />
  //         <PublicRoute path="/login" component={Login} />
  //         <PrivateRoute path="/mobile/d" component={PrivacyPolicyView} />
  //         <PrivateRoute path="/mobile/a" component={AboutUsView} />
  //         <PrivateRoute path="/mobile/c" component={ContactUsView} />
  //         <PrivateRoute path="/mobile/b" component={TermsConditionView} />
  //         {/* <PublicforgotRoute path ="/user/f"component={ForgotPassword} />
  //         <PublicforgotRoute path = "/user/c" component={ChangePassword}/> */}
             
  //         <Route component={Error} />
  //       </Switch>
        
  //     </HashRouter>


  //   );
  // }


  // else if (isUserType == 1) {
  //   return (
  //     <HashRouter>
  //       <Switch>

  //         <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
  //         <Route
  //           exact
  //           path="/app"
  //           render={() => <Redirect to="/app/dashboard" />}
  //         />
          
  //         {/* <PrivateRoute path="/app" component={AdminLayout} /> */}
  //         <PublicRoute path="/login" component={Login} />
          
  //         <Route component={Error} />
  //       </Switch>
  //     </HashRouter>
  //   );
  // }
  // else if (isUserType == 2) {
  //   return (
  //     <HashRouter>
  //       <Switch>
  //         <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
  //         <Route
  //           exact
  //           path="/app"
  //           render={() => <Redirect to="/app/dashboard" />}
  //         />
          
  //         <PublicRoute path="/login" component={Login} />
  //         <Route component={Error} />
  //       </Switch>
  //     </HashRouter>
  //   );
  // }


  // else {
  //   return (

  //     <HashRouter>
  //       <Switch>
  //         <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
  //         <Route
  //           exact
  //           path="/app"
  //           render={() => <Redirect to="/app/dashboard" />}
  //         />
          
  //         <PrivateRoute path="/app" component={Layout} />
  //         <PublicRoute path="/login" component={Login} />
  //         <Route component={Error} />
  //       </Switch>
  //     </HashRouter>
  //   );
  // }

  

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }


 
}
