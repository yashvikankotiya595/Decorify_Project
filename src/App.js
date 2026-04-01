import "./App.css";
import Login from "./Clients/Authentication/Login";
import Sign_up from "./Clients/Authentication/Sign_up";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

import Navbar from "./Clients/Components/Navbar";
import Footer from "./Clients/Components/Footer";
import HomeSec from "./Clients/Home/HomeSec";
import DecorRental from "./Clients/Quick Links/Decor_rental";
import FAQ from "./Clients/Quick Links/FAQ";
import AboutUs from "./Clients/Quick Links/About_Us";
import Contact_us from "./Clients/Quick Links/Contact_us";
import User_profile from "./Clients/Components/User_profile";
import RentItem from "./Clients/Components/RentItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Login">
            <Login></Login>
          </Route>

          <Route path="/Sign_up">
            <Sign_up></Sign_up>
          </Route>

          <Route path="/profile">
            <User_profile></User_profile>
          </Route>

          <Route>
            <Navbar />
            <Switch>
              <Route path="/decorRental">
                <DecorRental></DecorRental>
              </Route>

              <Route path="/faq">
                <FAQ></FAQ>
              </Route>

              <Route path="/about">
                <AboutUs></AboutUs>
              </Route>

              <Route path="/contact">
                <Contact_us></Contact_us>
              </Route>

              <Route path="/rentItem">
                <RentItem></RentItem>
              </Route>

              <Route path="/">
                <HomeSec></HomeSec>
              </Route>
            </Switch>
            <Footer></Footer>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
