import React, { Suspense, lazy } from "react";
import { GlobalStyle } from "./global.styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Portfolio from "./pages/Portfolio/Portfolio";
// import Blog from "./pages/Blog/Blog";
// import BlogPost from "./pages/BlogPost/BlogPost";
// import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
// import Error from "./pages/404/404";
// import Project from "./pages/Project/Project";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Project = lazy(() => import("./pages/Project/Project"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost/BlogPost"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Error = lazy(() => import("./pages/404/404"));

const App = () => {
  return (
    <Router>
      {/* <Suspense fallback={<Loader text={"Skill"} />}> */}
      <GlobalStyle />
      <AnimatePresence>
        <Navbar key="navbar" />
        <Suspense fallback={<Loader text={"Skill"} />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/portfolio/:url" exact component={Project} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:url" exact component={BlogPost} />
            <Route path="/contact" exact component={Contact} />
            <Route component={Error} />
          </Switch>
        </Suspense>
      </AnimatePresence>
      {/* </Suspense> */}
    </Router>
  );
};

export default App;
