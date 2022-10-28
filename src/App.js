import './App.css';
import Login from './pages/login'
import Updateform from './pages/updateform';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" /> }/>
          <Route path="/login" element={<Login /> }/>
          <Route path="/updateform" element={ <Updateform/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
