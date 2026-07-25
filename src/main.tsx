import React from 'react';import{createRoot}from'react-dom/client';import{BrowserRouter}from'react-router-dom';import App from './App';import './styles/index.css';import './styles/phase2.css';import './styles/phase3.css';
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js'));
createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
