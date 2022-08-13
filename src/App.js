import './style/App.css';
import Home from './components/Home';
import About from './components/About'
import { Routes, Route } from 'react-router-dom';
import Experience from './components/Experience';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="experience" element={ <Experience /> } />
      </Routes>
    </div>
  );
}


export default App;
