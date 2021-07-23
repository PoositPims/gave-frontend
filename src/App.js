import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./page/Homepage";
import Register from "./page/Register";
import ContactUs from "./page/ContactUs";
import Card from "./page/Card";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Homepage" component={Homepage} />
          <Route path="/Register" component={Register} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Card" component={Card} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
