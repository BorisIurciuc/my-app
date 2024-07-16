import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProductCard from "./components/productCard/ProductCard";
import Auth from "./components/auth/Auth";
import Dishes from "./components/dishes/Dishes";
import BrotherHood from "./components/brotherhood/Bratherhood";
import Lesson11 from "./lessons/lesson11/Lesson11";
// import Example from "./components/example/Example";
import Home from "./components/home/Home";
import FakeStore from "./components/fakeStore/FakeStore";
import Product from "./components/fakeStore/product/Product";
import DummyProduct from "./components/dummyProduct/DummyProduct";
import DummyProductSelect from "./components/dummyProduct/dummyProductSelect/DummyProductSelect";
import { UserProvider } from "./components/userContext/UserContext";
import MyForm from "./components/myForm/MyForm";
import ReduxProducts from "./features/reduxProducts/ReduxProducts";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ReduxDummyProd from "./features/reduxDummyProd/ReduxDummyProd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
  <UserProvider >
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/brotherhood" element={<BrotherHood />} />
        <Route path="/catfact" element={<Lesson11 />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/myform" element={<MyForm />} />
        <Route path={"/fakeStore"} element={<FakeStore />} />
        <Route path={"/fakeStore/:id"} element={<Product />} />
        <Route path="*" element={<h1>Error 404</h1>} />
        <Route path={"/dummyProduct"} element={<DummyProduct />} />
        <Route path={"/dummyProduct/:id"} element={<DummyProductSelect />} />
        <Route path={"/reduxProducts"} element={<ReduxProducts />} />
        <Route path={"/reduxDumProd"} element={<ReduxDummyProd />} />

      </Route>
    </Routes>
  </HashRouter>
  </UserProvider>
  </Provider>
);
