
import './App.css';
import { AddContentComponent } from './Components/AddContentComponent';
import HomeComponent from './Components/HomeComponent';
import NavBarComponent from './Components/NavBarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecipeDetailsComponent } from './Components/RecipeDetailsComponent';
import { NotFoundComponent } from './Components/NotFoundComponent';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBarComponent />
        <Switch>
          < Route exact path="/">
            <HomeComponent />
          </Route>
          < Route path="/add-content">
            <AddContentComponent />
          </Route>
          < Route path="/recipe/:id">
            <RecipeDetailsComponent />
          </Route>
          < Route path="*">
            <NotFoundComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
