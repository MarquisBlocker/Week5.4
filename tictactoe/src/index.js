import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter as Router, // we are aliasing this module for a cleaner call
    Route,
    Link
    // etc.
  } from 'react-router-dom';
 
//   import About from './Components/About';
import reportWebVitals from './reportWebVitals';

// Home component

class Home extends Component {
    render(){
      return(
        <div>
          <h1>Want to play a round of Tic Tac Toe?</h1>
          <h3>Click on the Play Header above!</h3>
          <h3>Click the About Header for some quick facts about Tic Tac Toe!</h3>
          <img src="https://starecat.com/content/wp-content/uploads/donald-trump-tic-tac-toe-i-won.jpg" />
        </div>
      );
    }
  }



// About component

class About extends Component {
    render(){
      return(
        <div style={{backgroundColor: 'yellow'}}>
          <h1>A little history on Tic Tac Toe</h1>
            <ul>
              <li>Tic Tac Toe history started with the Romans.</li>
              <li>Each player used to use 3 pebbles and had to move them around each turn.</li></ul>
              <ul><h1>Earlier names include:</h1>
                <li>Romans called it Three pebbles at a time.</li>
                <li>The British called it Noughts(referring to O's) and Crosses</li>
                <li>Tic Tac Toe name officially adopted by the United States in the 20th century.</li>
            </ul>

          <img src= "https://media.giphy.com/media/26grMgCg1xZh28AF2/giphy.gif" />
          {/* <p>We here at the Triple-R love fresh URLs, especially ones tied to awesome React Components.</p>
          <p>It's even better when you can switch between those URLs with ease and share them with friends and family</p> */}
        </div>
        
      );
    }
  }

  class Play extends Component {
    render(){
      return(
        <div>
          <h1>Play Now!</h1>
          <App />
        </div>
      );
    }
  }




class Navbar extends Component {
    render(){
      return(
        <div className="nav">
          <Link to="/">Home</Link> | 
          <Link to="Play">Play</Link> | 
          <Link to="about">About</Link>
        </div>
      );
    }
  }

  class Routes extends Component {
    render(){
      return(
        <Router>
          <div>
            <Navbar />
            <hr />
            <Route name="Home" exact path="/" component={Home}/>
            <Route name="Play" path="/Play" component={Play}/>
            <Route name="About" path="/about" component={About} />
          </div>
        </Router>
      );
    }
  }

ReactDOM.render(<Routes />, document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
