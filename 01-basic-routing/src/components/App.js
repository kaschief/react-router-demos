import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';
import Home from './HomeComponent';
import NoMatch from './NoMatchComponent';
import '../styles/App.css';

// import route Components here

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hello">Hello</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="books">Books</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hello" exact component={Hello} />
            <Route
              path="/hello/goodmorning"
              render={() => {
                return <h1>Goodmorning</h1>;
              }}
            />
            <Route path="/about" component={About} />
            <Route path="/books" component={Books} />
            <Route path="" component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
