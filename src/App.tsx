import './CSS/App.css'
import LandingPage from "./Components/Landing Page/LandingPage";
import ProjectsPage from './Components/Projects Page/ProjectsPage';
import {ContactPage} from './Components/Contact Page/ContactPage';


function App() {
  return (
    <div className="App">
      <LandingPage />
      <ProjectsPage />
      <ContactPage />
      
    </div>
  );
}

export default App;
