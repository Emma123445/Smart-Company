import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar.jsx';
import Accueil from './component/Accueil/Accueil.jsx';
// import Tendances from './component/Tendances/Tendance.jsx';
import VirtrineSmart from './Pages/VirtrineSmart.jsx';
import Footer from './component/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />  
        <Accueil />
        <VirtrineSmart />
        <Footer />
      </BrowserRouter>
    </div> 
  );
} 

export default App;
