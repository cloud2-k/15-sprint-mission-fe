import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
}
export default Layout;
