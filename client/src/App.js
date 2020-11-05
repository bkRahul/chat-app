import { Route, Switch } from 'react-router-dom';
import { Join } from './components/Join/Join';
import { Chat } from './components/Chat/Chat';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat/:room/:name" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
