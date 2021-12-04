import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import myprojects from './Pages/myprojects';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact}/>
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
