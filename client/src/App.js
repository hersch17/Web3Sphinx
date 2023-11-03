import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route  path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
