import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

function Layout() {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
}
export default Layout;
