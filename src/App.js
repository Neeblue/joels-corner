import Card from "./Card";
/*import Contact from "./components/Contacts";*/
import ProjectCards from "./ProjectCards";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ProjectCards />
      </header>
    </div>
  );
}

export default App;