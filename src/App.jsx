import './App.css';

import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider'
function App() {
  return (
    <>
        <NavBar/>
        <main className="home">
          <div className="home__container">
            <div className="home__content">
              <Slider/>
            </div>
          </div>
        </main>
    </>
  );
}

export default App;
