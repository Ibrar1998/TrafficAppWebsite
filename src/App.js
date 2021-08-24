import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/WebPages/Homes';
import { ToastContainer } from 'react-toastify';
import ContactUs from './Components/WebPages/Contact-Us';
import Login from './Components/WebPages/Login';
import AboutITP from './Components/WebPages/About-ITP';
import HowToApplyy from './Components/Servicess/HowToApplyy';
import VerifyLicense from './Components/Servicess/VerifyLicense';
import RoadSignsTest from './Components/EducationWing/RoadSignsTest/RoadSignsTest';
import TrafficViolations from './Components/EducationWing/RoadSignsTest/TrafficViolations';
import ImpRoadSigns from './Components/EducationWing/RoadSignsTest/ImpRoadSigns';
import SignUpPage from './Components/Register/SignUpPage';
import Profile from './Components/ProfileDashboard/Profile';
import ApplyForLearner from './Components/ProfileDashboard/ApplyForLearner';
import ApplyForLicense from './Components/ProfileDashboard/ApplyForLicense';
import PayChallan from './Components/ProfileDashboard/PayChallan';
import DemoTest from './Components/Servicess/DemoTest';
import JazzCash from './Components/ProfileDashboard/JazzCash';
import Paypal from './Components/ProfileDashboard/Paypal';
import  Stripe  from './Components/ProfileDashboard/Stripe';
 import Quiz from './Components/ProfileDashboard/Quiz';
 import ProfileCard from './Components/ProfileDashboard/ProfileCard';
const App = () => {
     
 return (
  <>
  <ToastContainer/>
    <Router>
       <Switch>
          <Route path='/' exact component={Home} />

                    <Route path='/HowToApplyy' component={HowToApplyy} />
                    <Route path ="/VerifyLicense" component={VerifyLicense} />
                    <Route path ="/DemoTest" component={DemoTest} />

                    <Route path='/RoadSignsTest' component={RoadSignsTest} />
                    <Route path='/TrafficViolations' component={TrafficViolations} />
                    <Route path='/ImpRoadSigns' component={ImpRoadSigns} />


                  {/* <Route path='/Dowanload' component={Dowanload} /> */}
                  <Route path='/AboutITP' component={AboutITP} />
                  <Route path='/Contact-Us' component={ContactUs} />
                  <Route path='/Login' component={Login} />
                  <Route path='/SignUpPage' component={SignUpPage} />
                  <Route path='/Profile'    component ={Profile}/>
                  <Route path ='/ApplyForLearner' component={ApplyForLearner}/>
                  <Route path ='/ApplyForLicense' component={ApplyForLicense}/>
                  <Route path ='/PayChallan' component={PayChallan}/>
                  <Route path ='/JazzCash' component={JazzCash}/>
                  <Route path ='/Paypal' component={Paypal}/>
                  <Route path ='/Stripe' component={Stripe}/>
                  <Route path ='/Quiz' component={Quiz}/>
                  <Route path ='/ProfileCard' component={ProfileCard}/>
                  
            </Switch>
          </Router>
      </>
  );}

export default App;

