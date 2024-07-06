import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoginForm from './components/loginForm/LoginForm';
import ProductCard from './components/productCard/ProductCard';
import Auth from './components/auth/Auth';
import MyForm from './components/myForm/MyForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter >
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<h1>homepage</h1>}/>
        <Route path='/login-form' element={<LoginForm/>}/>
        <Route path='/productcard' element={<ProductCard/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/myform' element={<MyForm/>}/>
        <Route path='*' element={<h1>Error 404</h1>}/>
      </Route>
    </Routes>
  </HashRouter >
);
