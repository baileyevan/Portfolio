import './CSS/App.css'
import LandingPage from "./Components/Landing Page/LandingPage";
import ProjectsPage from './Components/Projects Page/ProjectsPage';
import {ContactPage} from './Components/Contact Page/ContactPage';
import NavBar from './Components/TravelingNavBar/NavBar';


function App() {
  return (
    <div className="App">
      <LandingPage />
      <ProjectsPage />
      <ContactPage />
      <NavBar />
      
    </div>
  );
}

export default App;
