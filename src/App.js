import React, { Suspense } from "react";

import "./app.css";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGTP3,
} from "./containers/index";
import { NavBar, CTA, Brand } from "./components/index";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="App">
        <div className="gradient__bg">
          <NavBar />
          <Header />
        </div>
        <Brand />
        <WhatGTP3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
