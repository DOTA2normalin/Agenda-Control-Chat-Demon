import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes';
import Header from './Header';
const AppRouter=()=>{
   return (
      <Router>
            <Header/>
            <Routes/>
      </Router>
      
  );
}
export default AppRouter;