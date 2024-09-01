import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store, {persistor} from './redux/store.js';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'reset-css/reset.css';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import Loader from './components/Loader/Loader.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader></Loader>} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
