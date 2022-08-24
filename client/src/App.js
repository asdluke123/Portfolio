import './App.css';
import { Route, Routes } from 'react-router'
import Nav from './components/Nav';
import Home from './pages/Home';
import Work from './pages/Work';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
