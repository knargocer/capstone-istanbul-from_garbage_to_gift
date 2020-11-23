import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/LoginPage/Signup";
import { AuthProvider } from "./components/contexts/AuthContext";
import LoginContainer from "./containers/Login";
import ForgotPassword from "./components/LoginPage/ForgotPassword";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Footer from "./components/Footer";
import NewPostForm from "./containers/NewPostForm";
import Profile from "./containers/ProfilePage";

import PostPageVolunteer from "./containers/PostPageVolunteer";
import PostPageReceiver from "./containers/PostPageReciever";
import SiteNavbar from "./components/Navbar";
import SinglePostPage from "./containers/SinglePostPage";
import ApplicationPage from "./containers/ApplicationForm";

function App() {
  return (
    <>
      <AuthProvider>
        <Router className="appStyle">
          <Route path="/" component={SiteNavbar} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/donate" component={NewPostForm} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/donatePosts" component={PostPageVolunteer} />
          <Route path="/receivePosts" component={PostPageReceiver} />
          <Route exact path="/posts/:id" component={SinglePostPage} />
          <Route
            exact
            path="/application/:postType/:id"
            component={ApplicationPage}
          />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Footer} />
        </Router>
      </AuthProvider>
    </>
  );
}
export default App;
