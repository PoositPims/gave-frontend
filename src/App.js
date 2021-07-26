import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./page/Homepage";
import Register from "./page/Register";
import ContactUs from "./page/ContactUs";
import Card from "./page/Card";
import Sales from "./page/Sales";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Homepage" component={Homepage} />
          <Route path="/Register" component={Register} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Card" component={Card} />
          <Route path="/Sales" component={Sales} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
