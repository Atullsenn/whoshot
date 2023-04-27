import React from "react";
import { Route, Switch, Redirect, withRouter, } from "react-router-dom";
import classnames from "classnames";
import { Box } from '@material-ui/core'
import useStyles from "./styles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import AllHunters from "../AllHunters/AllHunters";
import NotificationDetails from "../Admin/Notifications/notificatonDetails";
import Maps from "../../pages/maps";
import Charts from "../../pages/charts";
import Settings from "../Settings/Settings";
import CreateTermsandservices from "../Terms and Services/CreateTermsandservices";
import CreatePrivacypolicy from "../Privacy Policy/CreatePrivacypolicy";
import PrivacyPolicy from "../Privacy Policy/PrivacyPolicy";
import { useLayoutState } from "../../context/LayoutContext";
import ContactDetails from "../Contactus/ContactDetails";
import AllNotification from "../Admin/Notifications/AllNotification";
import BasicReports from "../BasicReports/BasicReports";
import ManageHunts from "../ManageHunts/ManageHunts";
import AboutPage from "../About/AboutPage";
import DetailsOfGroup from "../DetailsofGroup/DetailsOfGroup";
import ManageGroups from "../ManageGroup/ManageGroups";
import HuntDetail from "../HuntDetail/HuntDetail";
import HunterDetail from "../hunterDetail/HunterDetail";



function Layout(props) {
  var classes = useStyles();
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/all-hunters/" component={AllHunters} />
            <Route exact path="/app/ui" render={() => <Redirect to="/app/ui/icons" />} />
            <Route path="/app/ui/maps" component={Maps} />
            <Route path="/app/ui/charts" component={Charts} />
            <Route path="/app/manage-hunts/" component={ManageHunts} />
            <Route path="/app/hunt-details/:id" component={HuntDetail} />
            <Route path="/app/hunter-details/:id" component={HunterDetail}/>
            <Route path="/app/details-of-group/" component={DetailsOfGroup} />
            <Route path="/app/manage-groups/" component={ManageGroups} />
            <Route path="/app/basic-reports/" component={BasicReports} />
            <Route path="/app/settings/" component={Settings} />
            <Route path="/app/notifications" component={AllNotification} />
            <Route path="/app/about-us" component={AboutPage} />
            <Route path="/app/create-contact-details/" component={ContactDetails} />
            <Route path="/app/create-terms-and-services" component={CreateTermsandservices} />
            <Route path="/app/privacy-policy" component={PrivacyPolicy} />
            <Route path="/app/create-privacy-policy" component={CreatePrivacypolicy} />
            <Route path="/app/notificationDetails/:id" component={NotificationDetails} />

          </Switch>
          <Box
            mt={0}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
          </Box>
        </div>
      </>
    </div >
  );
}

export default withRouter(Layout);