import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MiniDrawer from './components/MiniDrawer';
import Subscriptions from './pages/Subscriptions';
import Todo from './pages/Todo';
import Notes from './pages/Notes';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path ='/' exact>
            <Notes />
          </Route>
        </Switch>
        <Switch>
          <Route path ='/todo' exact>
            <Todo />
          </Route>
        </Switch>
        <Switch>
          <Route path ='/subscriptions' exact>
            <Subscriptions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
