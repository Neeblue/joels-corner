import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  let component
  switch (window.location.pathname) {
    case "/": default:
      component = (
        <div>
          <Introduction />
          {/* TODO: Add icon tags, Github main link */}
          <Projects />
        </div>
      );
      break;
    case "/about":
      component = <About />;
      break;
    case "/projects":
      component = <Projects />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    }
  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;