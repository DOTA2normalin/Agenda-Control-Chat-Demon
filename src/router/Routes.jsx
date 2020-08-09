import React from 'react';
import { Route, Switch } from "react-router-dom";
import Registrar from '../Components/Registrar';
import Login from '../Components/Login';
import Home from '../Components/Home';
import Google from '../Components/Google';
import Facebook from '../Components/Facebook';
import Crud from '../Components/Crud';
const Routes=()=>{
   return (
         <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/login" component={Login} />
               <Route path="/registrar" component={Registrar} />
               <Route path="/google" component={Google}/>
               <Route path="/facebook" component={Facebook}/>
               <Route path="/about" component={Crud}/>
         </Switch>
  );
}
export default Routes;