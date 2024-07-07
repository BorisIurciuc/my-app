import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProductCard from './components/productCard/ProductCard';
import Auth from './components/auth/Auth';
import MyForm from './components/myForm/MyForm';
import Dishes from './components/dishes/Dishes';
import BrotherHood from './components/brotherhood/Bratherhood';
import Lesson11 from './lessons/lesson11/Lesson11';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter >
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<h1>homepage</h1>}/>
        <Route path='/dishes' element={<Dishes/>}/>
        <Route path='/brotherhood' element={<BrotherHood/>}/>
        <Route path='/catfact' element={<Lesson11/>}/>
        <Route path='/productcard' element={<ProductCard/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/myform' element={<MyForm/>}/>
        <Route path='*' element={<h1>Error 404</h1>}/>
      </Route>
    </Routes>
  </HashRouter >
);
