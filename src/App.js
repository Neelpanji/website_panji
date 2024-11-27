// import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


import { useController } from 'react-scroll-parallax';
import { useEffect, useLayoutEffect } from 'react';
import ReactGA from 'react-ga';

import GA4React from "ga-4-react";
const TRACKING_ID = "UA-213430949-1"; // YOUR_OWN_TRACKING_ID

const ga4react = new GA4React("G-GHB0BF8M82");


const ParallaxCache = () => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
      const handler = () => parallaxController.update();
      window.addEventListener('load', handler);
      return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  return null;
};


const store = ConfigureStore();

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // console.log(window.location.pathname + window.location.search)
    ReactGA.pageview(window.location.pathname + window.location.search);

    ga4react.initialize().then((ga4) => {
      ga4.pageview(window.location.pathname + window.location.search)
      ga4.gtag('event','pageview','path') // or your custom gtag event
    },(err) => {
      console.error(err)
    })
  }, [])
  // console.log(window.location.pathname + window.location.search)
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <ParallaxCache />
        <Main />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
