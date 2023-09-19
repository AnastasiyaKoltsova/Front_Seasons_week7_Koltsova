import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import photos from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App photos={photos} />
  </React.StrictMode>
);
