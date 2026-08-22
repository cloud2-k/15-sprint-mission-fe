import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

function LandingLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default LandingLayout;
