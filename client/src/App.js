import './App.css';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Lists from './components/Lists/Lists';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>

        <Route exact path='/profile'>
          <Profile />
        </Route>

        <Route exact path='/my-lists'>
          <Lists />
        </Route>
      </Switch>             
    </div>
  );
}

export default App;
