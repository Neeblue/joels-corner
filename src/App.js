import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import Website from "./pages/projects/Website";
import Bookshelf from "./pages/projects/Bookshelf";
import Librarian from "./pages/projects/Librarian";
import Teaching from "./pages/projects/Teaching";

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
    case "/projects/this-website":
      component = <Website />;
      break;
    case "/projects/bookshelf":
      component = <Bookshelf />;
      break;
    case "/projects/librarian":
      component = <Librarian />;
      break;
    case "/projects/teaching-app-api":
      component = <Teaching />;
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