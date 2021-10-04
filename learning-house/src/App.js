
import './App.css';

import Home from './Components/Home/Home';
import About from './Components/About/About';

import EnrollCourse from './Components/Enrolment/EnrollCourse';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
       <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
              <Services></Services>
          </Route>
          <Route exact path="/enroll">
            <EnrollCourse></EnrollCourse>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
       </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
