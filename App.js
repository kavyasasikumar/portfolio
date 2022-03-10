import { Switch,Route } from 'react-router-dom';

import Layout from './component/layout';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import "./index.css";


function App() {

  return <Layout>
    <Switch>
      <Route path="/"exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  </Layout>;
}

export default App;
