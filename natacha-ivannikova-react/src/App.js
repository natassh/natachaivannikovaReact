import React from 'react';
import './styles/app.css';
import MainHeader from './Components/Molecules/MainHeader/MainHeader';
import BoxList from './Components/Organisms/BoxList/BoxList';
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
