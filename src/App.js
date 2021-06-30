import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/WebPages/Homes';
// import Dowanload from './Components/WebPages/Dowanload';
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


const App = () => {
     
 return (


      <>
        <Router>
       
      
        <Switch>
          <Route path='/' exact component={Home} />

                    <Route path='/HowToApplyy' component={HowToApplyy} />
                    <Route path ="/VerifyLicense" component={VerifyLicense} />

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
                </Switch>
    </Router>
      </>
    
    

  );
}

export default App;

