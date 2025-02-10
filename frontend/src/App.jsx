import { useEffect, useState } from "react";

import "./App.css";
import { useDispatch } from "react-redux";

import { setUserDetails } from "./store/userSlice";
import Context from "./context";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import SummaryApi from "./common";

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);
  const fetchuserDetails = async () => {
    try {
      const Response = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });
      const dataApi = await Response.json();
      if (dataApi?.success) {
        console.log("data" + dataApi.data);
        dispatch(setUserDetails(dataApi.data));
      }
      if (dataApi.error) {
        console.log(dataApi.error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchaddToCart = async () => {
    try {
      const Response = await fetch(SummaryApi.addToCartProductCount.url, {
        method: SummaryApi.addToCartProductCount.method,
        credentials: "include",
      });
      const dataApi = await Response.json();
      if (dataApi.success) {
        setCartProductCount(dataApi?.data?.count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchuserDetails();
    fetchaddToCart();
  }, []);

  return (
    <div>
      <Context.Provider
        value={{
          fetchuserDetails,
          fetchaddToCart,
          cartProductCount,
        }}
      >
        <Header />
        <main className="min-h-[calc(100vh-120px)] pt-16">
          <Outlet />
        </main>
        {/* <footer /> */}
      </Context.Provider>
    </div>
  );
}

export default App;
