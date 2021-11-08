import './App.css';
import {
  BrowserRouter as Router,
  useParams,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Movie from './Movie';
import MovieDetail from './MovieDetail';
import Lost from './Lost';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/tv-shows/:movieName">
            <Movie />
          </Route>
          <Route exact path="/tv-shows/details/:id">
            <MovieDetail />
          </Route>
          <Route>
            <Lost />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
