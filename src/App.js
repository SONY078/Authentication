import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Header from './Components/Header';
import User from './Components/User';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/' element={<Logout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
