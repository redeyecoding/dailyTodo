import './App.css';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Lists from './components/Lists/Lists';
import Layout from './components/Layout/Layout';
import Background from './components/Background/Background';



function App() {
  return (
    <div className="App">
      <Background />      
      <Switch>
        <Route exact path='/'>
        <Layout />
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
