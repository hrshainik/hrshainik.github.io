import React, { Suspense, lazy, useState, useEffect } from "react";
import { GlobalStyle } from "./global.styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarM from "./components/NavbarM/NavbarM";
import NavbarD from "./components/NavbarD/NavbarD";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader/Loader";
import { API_URL } from "./utils/urls";

const Home = lazy(() => import("./pages/Home/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Project = lazy(() => import("./pages/Project/Project"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost/BlogPost"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Error = lazy(() => import("./pages/404/404"));

const getProjects = () => {
  return fetch(`${API_URL}/portfolios`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

const getAbout = () => {
  return fetch(`${API_URL}/about`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 600;

  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState({});

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
    getAbout().then((data) => setAbout(data));
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <AnimatePresence>
        {isMobile ? <NavbarM key="navbar" /> : <NavbarD key="navbar" />}
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Home isMobile={isMobile} projects={projects} about={about} />
              )}
            />
            <Route
              path="/portfolio"
              exact
              component={() => (
                <Portfolio isMobile={isMobile} projects={projects} />
              )}
            />
            <Route
              path="/portfolio/:slug"
              exact
              component={({ match }) => (
                <Project
                  isMobile={isMobile}
                  match={match}
                  projects={projects}
                />
              )}
            />
            <Route
              path="/blog"
              exact
              component={() => <Blog isMobile={isMobile} />}
            />
            <Route
              path="/blog/:url"
              exact
              component={() => <BlogPost isMobile={isMobile} />}
            />
            <Route
              path="/contact"
              exact
              component={() => <Contact isMobile={isMobile} />}
            />
            <Route component={Error} />
          </Switch>
        </Suspense>
      </AnimatePresence>
    </Router>
  );
};

export default App;
