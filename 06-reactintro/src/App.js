import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from './components/User';
import Account from "./components/Account";
import Blog from "./components/Blog";

function App() {
  return (
    <Router>
      <div className="Nav">
        <Link to="/">Home</Link>
        <Link to="/account">account</Link>
        <Link to="/blog">blog</Link>
      </div>
      <Routes>
        <Route path="/" element={<User name='Homero Thompson' logo={logo} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <Info logo={logo}/>
    // </div>
  );
}

export default App;
