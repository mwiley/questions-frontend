import logo from './images/logo.svg';
import usersIcon from './images/users-solid.svg';
import questionsIcon from './images/comment-solid.svg';
import upvotesIcon from './images/circle-up-solid.svg';
import tokensIcon from './images/coins-solid.svg';
import avatar from './images/avatar.png';
import './App.css';

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Link to="/ask-question" className="button">Ask a question</Link>
      </nav>

      <div className="container">
        <div className="App-header">
          <img src={logo} className="App-logo" width="50"></img>
          <h1>Near Protocol</h1>
        </div>

        <div className="App-body">
          <div className="App-page">
            <Outlet/>
          </div>

          <div className="App-sidebar">
            <div className="card">
              <h2>About</h2>
              <p>
                <img src={usersIcon} className="card-icon" width="25"></img>
                246 Experts
              </p>
              <p>
                <img src={questionsIcon} className="card-icon" width="25"></img>
                100k Questions and Answers
              </p>
              <p>
                <img src={upvotesIcon} className="card-icon" width="25"></img>
                50k Upvotes
              </p>
              <p>
                <img src={tokensIcon} className="card-icon" width="25"></img>
                145 Tokens Awarded
              </p>
            </div>

            <div className="card">
              <h2>Top Experts</h2>

              {
                ['Psuedo Near Expert', 'Near Expert', 'Bitcoin Maxi', 'Ethereum Maxi'].map(name => {
                  return (
                    <div className='user'>
                      <img className='user-avatar' src={avatar} width="50" height="50"></img>
                      <div className='user-info'>
                        <span className="user-name">{name}</span>
                        <span className="user-stats"> 
                          47
                          <img src={upvotesIcon} width={15}></img>
                          collected
                        </span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
