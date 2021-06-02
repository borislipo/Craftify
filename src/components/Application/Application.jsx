import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Upload from "../Upload/Upload";
function Application() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Upload" component={Upload}>
            {/* <Upload /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default Application;
