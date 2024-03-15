// import Navbar from './components/navbar';
// import Home from './components/home';
// import Projects from './components/projects';
// import Contact from './components/contact';
// import About from './components/about';
// import Experience from './components/experience.jsx';

import About from "./components/about";
import Home from "./components/home";
import Nav from "./components/nav";
import Services from "./components/services";
import Projects from "./components/projects";
import Contacts from "./components/contacts"
// import Experience from "./components/experience"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <div className="bg-slate-900">
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Contacts></Contacts>
      {/* < Experience></Experience> */}
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
