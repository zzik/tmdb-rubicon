import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Layout } from './components/Layout';
import NoMatch from './routes/NoMatch';
import { Details } from './routes/Details';
import Item from './routes/Item';
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Layout />} />
          <Route path=':contype/:id' element={<Details />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
