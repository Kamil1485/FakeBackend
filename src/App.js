import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
function App() {
  return (
    <div className="App">
   <ToastContainer theme='colored' position='top-right' style={{width:"300px",height:"20px"}}></ToastContainer>     <BrowserRouter>
  <Routes>  
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<Register/>}></Route>


</Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
