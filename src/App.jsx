import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBarComponents/NavBar";
import LandingPage from './Components/LandingPage';
import Projects from './Components/Projects';
import Experience from './Components/Experience';

function App() {
  return (
    <Router>
      <div className="background"></div>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
