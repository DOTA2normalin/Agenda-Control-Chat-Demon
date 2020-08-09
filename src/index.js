import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebaseConfig from "../src/firebase/index";
import { FirebaseAppProvider } from 'reactfire';
import { Suspense } from 'react';
import 'bootswatch/dist/flatly/bootstrap.min.css';
ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Loading...'}>
        <React.StrictMode>
          <App /> 
        </React.StrictMode>
      </Suspense>
    </FirebaseAppProvider>,
    document.getElementById('root')
  );
