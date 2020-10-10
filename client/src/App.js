import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import MenuPage from "./pages/MenuPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserHome from "./pages/UserHome";
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Wrapper>
       <Navbar />
         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={UserHome} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
        </Wrapper>
     </Router>
  );
}

export default App;
