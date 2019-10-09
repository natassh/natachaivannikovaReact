import React from 'react';
import './styles/app.css';
import MainHeader from './Components/Molecules/Main-header/Main-header';
import BoxList from './Components/Molecules/Box-list/Box-list';
import MainFooter from './Components/Molecules/MainFooter/MainFooter';

function App() {
  return (
    <div className="App">
      <div className="ly-content">
        <MainHeader />
        <main className="main-content">
          <BoxList />
        </main>
        <MainFooter />
      </div>
    </div>
  );
}

export default App;
