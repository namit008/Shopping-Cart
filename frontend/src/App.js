import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home.js";
import NotFound from "./components/NotFound.js";
import Cart from "./components/Cart.js";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [search, setSearch] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <div className="content-container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
