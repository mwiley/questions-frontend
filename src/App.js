import logo from './images/logo.svg';
import './App.css';

import { Outlet, Link } from "react-router-dom";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Link to="/ask-question" className="button">Ask a question</Link>
      </nav>

      <div className="container">
        <div className="App-header">
          <img src={logo} alt="logo" className="App-logo" width="50"></img>
          <h1>Near Protocol</h1>
        </div>

        <div className="App-body">
          <div className="App-page">
            <Outlet/>
          </div>

          <Sidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
