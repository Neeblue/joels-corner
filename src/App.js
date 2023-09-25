import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";

export default function App() {
  let component;
  //If user clicks the website project it returns itself
  if (window.location.pathname === "/projects/website") component = <Introduction />;
  //If user clicks a project it returns a url based on the json project keyword
  else if (window.location.pathname.startsWith("/projects/")) {
    const keyword = window.location.pathname.replace("/projects/", "");
    component = <SingleProject keyword={keyword} />;
  }
  //If user clicks any other link it will return the appropriate page
  else switch (window.location.pathname) {
    case "/": default:
      component = <Introduction />;
      break;
    case "/projects":
      component = <Projects />;
      break;
    case "/about":
      component = <About />;
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