import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './components/Context.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
      <ToastContainer position="bottom-right"/>
    </BrowserRouter>
  </StrictMode>,
)
