import React from 'react';
import './styles/app.css';
import MainHeader from './Components/Molecules/Main-header/Main-header';
import BoxList from './Components/Molecules/Box-list/Box-list';
import Footer from './Components/Molecules/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="ly-content">
        <MainHeader />
        <main className="main-content">
          <BoxList />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
