import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainNavigation from "./components/Navigation/MainNavigation";
import Hero from "./components/pages/Hero";
import TabLogic from "./components/pages/TabLogic";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Hero />
      <TabLogic />
    </Router>
  );
};

export default App;
