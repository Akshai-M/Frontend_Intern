import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Users from './components/Users/Users';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Users />
      <Contact />
    </div>
  );
}

export default App;