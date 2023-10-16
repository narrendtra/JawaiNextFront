import React from "react";
import { fetcher } from "../pages/api/myapi";
import useSWR from "swr";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { data: actData } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URl}/api/activities`,
    fetcher
  );
  const { data: accData } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URl}/api/accommodations`,
    fetcher
  );
  return (
    <div className="contant">
      <Navbar accdata={accData} actdata={actData} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
