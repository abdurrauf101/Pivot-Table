import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import this frin syncfysuion
import { registerLicense } from '@syncfusion/ej2-base';

// register your license key here 
registerLicense("Ngo9BigBOggjHTQxAR8/V1NNaF5cWWJCeEx3RHxbf1x1ZFJMYFxbRH5PMyBoS35Rc0VmWH1ed3FQR2BZVEJwVEBU")

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
