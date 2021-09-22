import { BrowserRouter as Router, Redirect, Route , Switch } from 'react-router-dom'

import SignUp from './screens/formPage/SignUp';
import ShowData from './screens/showData/ShowData';
import Edit from './screens/formPage/Edit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Redirect from="/signup" to="/"/>
          <Route exact path="/showdata" component={ ShowData}/>
          <Route exact path="/edit/:userId" component={ Edit}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
