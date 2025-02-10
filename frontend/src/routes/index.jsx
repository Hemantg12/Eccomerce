// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import App from '../App';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import ForgotPassword from '../pages/ForgotPassword';
// import SignUp from '../pages/SignUp';
// import AdminPanel from '../pages/AdminPanel';
// import AllUsers from '../pages/AllUsers';
// import AllProducts from '../pages/AllProducts';
// import CategoryProduct from '../pages/CategoryProduct';
// import ProductDetails from '../pages/ProductDetails';
// import Cart from '../pages/Cart';
// import SearchProduct from '../pages/SearchProduct';
// const AppRouter = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="forgot-password" element={<ForgotPassword />} />
//         <Route path="sign-up" element={<SignUp />} />
//         <Route path="product-category" element={<CategoryProduct />} />
//         <Route path="product/:id" element={<ProductDetails />} />
//         <Route path="cart" element={<Cart />} />
//         <Route path="search" element={<SearchProduct />} />
//         <Route path="admin-panel" element={<AdminPanel />}>
//           <Route path="all-users" element={<AllUsers />} />
//           <Route path="all-products" element={<AllProducts />} />
//         </Route>
//       </Route>
//     </Routes>
//   </Router>
// );
// export default AppRouter;
//This configuration reflects how routes are set up using Routes and Route components in React Router v5. The newer version (React Router v6) uses a different API with createBrowserRouter and RouterProvider, offering a more declarative and flexible way to manage routing.

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassowrd from "../pages/ForgotPassowrd";
import CategoryProduct from "../pages/CategoryProduct";
import SignUp from "../pages/SignUp";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import SearchProduct from "../pages/SearchProduct";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassowrd />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "product-category",
        element: <CategoryProduct />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "search",
        element: <SearchProduct />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-products",
            element: <AllProducts />,
          },
        ],
      },
    ],
  },
]);

export default router;
