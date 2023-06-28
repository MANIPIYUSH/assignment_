import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { FilterProvider } from './contexts/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FilterProvider> 
     <App />
   </FilterProvider>,
);
