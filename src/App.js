import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import Contact from "./components/Contacts";
import GitHubProjectList from "./components/GitHubProjectList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank"  rel="noopener noreferrer">Learn React</a>
        <p />
        <Card />
        <Card />
        <p />
        <GitHubProjectList />
      </header>
    </div>
  );
}

export default App;