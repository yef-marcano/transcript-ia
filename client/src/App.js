import 'bootstrap/dist/css/bootstrap.css';
import './style/style.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import NavBar from "./components/NavBar";
import TranPage from "./components/TranPage";

import {Provider} from "react-redux";
import store from './store'
import Alert from "./components/Alert";

function App() {
  return (
      <Provider store={store}>
          <>
              <Router basename="/test-ia">
                  <NavBar/>
                  <Alert/>
                  <Switch>
                      <Route exact path='/' component={Landing}/>
                      <Route exact path='/tran' component={TranPage}/>
                  </Switch>
              </Router>
          </>
      </Provider>

  );
}

export default App;
