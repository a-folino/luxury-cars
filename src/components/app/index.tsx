import React, { useState } from 'react';
import './styles.scss';
import { Home } from '../../views/Home';
import { Cars } from '../../views/Cars';
import { Services } from '../../views/Services';
import { About } from '../../views/About';
import { Contact } from '../../views/Contact';
import { Nav } from '../nav';

function App() {
  const [view, setView] = useState('');
  
  const displayContent = () => {
    console.log(view)
    switch (view) {
      case 'Home':
        return <Home />;
      case 'Cars':
        return <Cars />;
      case 'Services':
        return <Services />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="container">
      <Nav setView={setView} />
      {displayContent()}
    </div>
  );
}

export default App;
