import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from './components/pages/notFoundPage.tsx'
import Register from './components/pages/Register.tsx';
import UserTab from './components/pages/User-tab.tsx';
import Layout from './components/pages/Layout.tsx';


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/register' element={<Layout><Register></Register></Layout>}></Route>
      <Route path='/userTab' element={<Layout><UserTab></UserTab></Layout>}></Route>
    </Routes>
    </BrowserRouter> 
)
