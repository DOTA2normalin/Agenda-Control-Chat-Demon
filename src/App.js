import React from 'react';
import './App.css';
import AppRouter from '../src/router/AppRouter'
import { ToastContainer} from 'react-toastify';
function App() {

  return (
    <div>
        <AppRouter/>
        <ToastContainer/>
    </div>
  );
}

export default App;
