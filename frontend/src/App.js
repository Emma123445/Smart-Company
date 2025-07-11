import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar.jsx';
import Accueil from './component/Accueil/Accueil.jsx';
// import Tendances from './component/Tendances/Tendance.jsx';
import VirtrineSmart from './Pages/VirtrineSmart.jsx';
import Footer from './component/Footer/Footer.jsx';
import Live from './component/Lives/Live.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />  
        <Accueil />
        <VirtrineSmart />
        <Live />
        <Footer />
      </BrowserRouter>
    </div> 
  );
} 

export default App;
