import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Project = lazy(() => import("./pages/Project/Project"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost/BlogPost"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Error = lazy(() => import("./pages/404/404"));

const Page = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
    </Router>
  );
};

export default Page;
