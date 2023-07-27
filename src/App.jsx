
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProfilePage } from "./Pages/Profile";
import { ProfileDetailPage } from "./Pages/ProfileDetail";
import { FeedPage } from "./Pages/Feed";
import { HomePage } from "./Pages/Home";
import { NoPage } from "./Pages/NoPage";

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">To Home</Link>
          </li>
          <li>
            <Link to="/profile">To Profile</Link>
          </li>
          <li>
            <Link to="/profile/Andrew">
              To Andrew's Profile
            </Link>
          </li>
          <li>
            <Link to="/feed">To Feed</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route path="/profile/:username" component={ProfileDetailPage} />
          <Route path="/feed" component={FeedPage} />
          <Route path="/*" component={NoPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;