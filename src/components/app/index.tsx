import React, { useState } from 'react';
import './styles.scss';
import { Home } from '../../views/Home';
import { Cars } from '../../views/Cars';
import { Services } from '../../views/Services';
import { About } from '../../views/About';
import { Contact } from '../../views/Contact';
import { Nav } from '../nav';
import { colors } from '../../data/data';

function App() {
  const [view, setView] = useState('');

  const displayContent = () => {
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

  const background = () => {
    if (view === 'Home') {
      return colors.primaryColor;
    } else if (view === 'Cars') {
      return colors.primaryColor;
    } else if (view === 'Services') {
      return colors.primaryColor;
    } else if (view === 'About') {
      return '#0F52BA';
    } else if (view === 'Contact') {
      return colors.primaryColor;
    }
  }

  return (
    <div className="container" style={{ background: background(), transition: 'background 1s ease' }}>
      <Nav setView={setView} view={view} />
      {displayContent()}
    </div>
  );
}

export default App;
