import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";

export default function App() {
  let component;
  if (window.location.pathname.startsWith("/projects/")) {
    const keyword = window.location.pathname.replace("/projects/", "");
    component = <SingleProject keyword={keyword} />;
  } else
  switch (window.location.pathname) {
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