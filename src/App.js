import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./page/Homepage";
import Register from "./page/Register";
import ContactUs from "./page/ContactUs";
import Card from "./page/Card";
import Sales from "./page/Sales";
import Payment from "./page/Payment";
import Purchase from "./page/Purchase";

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
          <Route path="/Payment" component={Payment} />
          <Route path="/Purchase" component={Purchase} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
