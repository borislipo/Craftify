import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";
import Upload from "../Upload/Upload";
function Application() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/upload" component={Upload} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default Application;
