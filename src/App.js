import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


import { useController } from 'react-scroll-parallax';
import { useEffect, useLayoutEffect } from 'react';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-213422662-1"; // YOUR_OWN_TRACKING_ID


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

    ReactGA.pageview('/');
  }, [])
  
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
