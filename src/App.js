import React from 'react'
import AboutUs from './containers/AboutUs'
import GlobalStyle from './components/GlobalStyle'
import {Route, Switch, Redirect, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import ContactUs from './containers/ContactUs'
import OurWork from './containers/OurWork'
import movieDetail from './containers/movieDetail.js'
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/contact" component={ContactUs} />
          <Route path="/works" exact component={OurWork} />
          <Route path='/works/:id' component={movieDetail} />
          <Route path="/" exact component={AboutUs} />
          <Redirect to="/" />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
