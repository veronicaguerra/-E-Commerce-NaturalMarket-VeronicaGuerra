import "./App.css";

//componente navbar mostrado en el header
import Barra from "./components/navbar/NavBar";

// react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//routes
import Home from "./components/routes/home/Home";
import About from "./components/routes/about/About";
import Contact from "./components/routes/contact/Contact";
import Deals from "./components/routes/deals/Deals";
import Cart from "./components/routes/cart/Cart";
import ListDetailContainer from "./components/listdetailcontainer/ListDetailContainer";
import ListCategories from "./components/routes/categories/ListCategories";
import CheckOrder from "./components/routes/checkorder/CheckOrder";

//context 
import { CartContext } from "./components/context/CartContext";

const App = () => {

  return (
   <CartContext>
    <Router>
      <>
        <header className="App-header">
          <Barra />
        </header>
        <Switch>
          <body className="App-body">
            <div className="App-Component">
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/deals" component={Deals} />
              <Route path="/categories/:categorie"  component={ListCategories} />
              <Route path="/item/:id"  component={ListDetailContainer} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/order" exact component={CheckOrder} />
            </div>
          </body>
        </Switch>
      </>
    </Router>
  </CartContext>
  );
}

export default App;
