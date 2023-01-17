import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Forms from './components/Forms';
import Home from './components/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UpdateForm from './components/UpdateForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
       <Routes>
        <Route exact path='/forms' element={<Forms />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/edit/:id' element={<UpdateForm />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
