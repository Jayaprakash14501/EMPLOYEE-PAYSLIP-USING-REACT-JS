
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './project/Home';
import Details from './project/Details';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
