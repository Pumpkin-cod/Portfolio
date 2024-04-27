
import { BrowserRouter } from 'react-router-dom';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Footer from './component/Footer';
// import About from './component/About';
// import Projects from './component/Projects';
// import Contact from './component/Contact';

const App: React.FC = () => {
  return (
  <div>
    <Hero />
    <About />
    <BrowserRouter>
      <Projects />
    </BrowserRouter>
    <Footer />
  </div>
  );
}

export default App;
