import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Calculadora from './pages/calculadora/Calculadora';
import CalculadoraFunction from './pages/calculadora-function/CalculadoraFunction';
import Usuario from './pages/usuario/Usuario';

function App() {
  return (
    <Router>
      <div className='Container'>
        <Header nome="Matheus"/>
        <Routes>
          <Route path='/calculadora' element={<Calculadora/>} />
          <Route path='/calculadorafunction' element={<CalculadoraFunction />} />
          <Route path='/usuario' element={<Usuario />} />
          {/* <Calculadora />
          <CalculadoraFunction />   */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
