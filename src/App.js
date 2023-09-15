import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  let component
  switch (window.location.pathname) {
    case "/": default:
      component = <Projects />;
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