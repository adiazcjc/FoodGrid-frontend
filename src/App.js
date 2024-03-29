import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing'
import Home from './components/Home'
import Details from './components/Details'
import Form from './components/Form'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {Landing}/>
        <Route path = '/home' component = {Home}/>
        <Route path='/recipes/:id' component = {Details}/>
        <Route path = '/recipes' component = {Form}/>
        <Route path = '/about' component = {About}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
