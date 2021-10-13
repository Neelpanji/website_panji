import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


import { useController } from 'react-scroll-parallax';
import { useLayoutEffect } from 'react';


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
