import "./App.css";
import Login from "./Pages/Clients/Authentication/Login";
import Sign_up from "./Pages/Clients/Authentication/Sign_up";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

import Navbar from "./Pages/Clients/Components/Navbar";
import Footer from "./Pages/Clients/Components/Footer";
import HomeSec from "./Pages/Clients/Home/HomeSec";
import DecorRental from "./Pages/Clients/Quick Links/Decor_rental";
import FAQ from "./Pages/Clients/Quick Links/FAQ";
import AboutUs from "./Pages/Clients/Quick Links/About_Us";
import Contact_us from "./Pages/Clients/Quick Links/Contact_us";
import User_profile from "./Pages/Clients/Components/User_profile";
import RentItem from "./Pages/Clients/Components/RentItem";
import Dashboard from "./Pages/Admin/AdminPages/Dashboard";
import Sidebar from "./Pages/Admin/Layout/Sidebar";
import AdminLayout from "./Pages/Admin/Layout/AdminLayout";

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

          <Route path="/admin">
            <AdminLayout></AdminLayout>
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
