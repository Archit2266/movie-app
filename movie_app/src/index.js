import React from 'react';
import ReactDOM from 'react-dom/client';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";                                     

import './index.css';
import App from './App';

//theam
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
