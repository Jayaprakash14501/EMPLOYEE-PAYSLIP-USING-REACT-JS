
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './project/Home';
import Details from './project/Details';
import Payslip from './project/Payslip';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/payslip' element={<Payslip/>}/>
       
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
