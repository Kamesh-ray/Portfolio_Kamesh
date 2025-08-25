import logo from './logo.svg';
import './App.css';
import MyPortfolio from './pages/MyPortfolio';
import Home from './pages/Home';
import Skillset from './pages/Skillset';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="background-video">
  <video autoPlay loop muted playsInline>
    <source src="/backgrounds/portfolio-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/pages/Skillset' element= {<Skillset/>}/>
        <Route path='/pages/About' element= {<About/>}/>
        <Route path='/pages/Projects' element= {<Projects/>}/>
        <Route path='/pages/Contact' element= {<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
