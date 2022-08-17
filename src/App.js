import './style/App.css';
import Home from './components/Home';
import About from './components/About'
import { Routes, Route } from 'react-router-dom';
import Cashmate from './components/Cashmate';
import BostonHacks from './components/BostonHacks';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className='app'>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="cashmate" element={ <Cashmate /> }/>
          <Route path="bostonhacks" element={ <BostonHacks /> }/>
        </Routes>
      </ScrollToTop>
    </div>
  );
}


export default App;
