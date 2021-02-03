import { GlobalStyle } from "./index.styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import Error from "./pages/404/404";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AnimatePresence>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route component={Error} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
};

export default App;
