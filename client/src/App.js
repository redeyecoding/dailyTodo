import './App.css';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Lists from './components/Lists/Lists';
import Layout from './components/Layout/Layout';
import AuthBackground from './components/Background/AuthBackground';




function App() {
  return (
    
    <div className="App">
      <AuthBackground />      
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
