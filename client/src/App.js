import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MiniDrawer from './components/MiniDrawer';
import Subscriptions from './pages/Subscriptions';
import Todo from './pages/Notes';
import Notes from './pages/Todo';


function App() {
  return (
    <div className="App">
      <Router>
        <MiniDrawer />
        <Switch>
          <Route path ='/' exact component={Subscriptions} />
          <Route path ='/todo' component={Todo} />
          <Route path ='/notes' component={Notes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
