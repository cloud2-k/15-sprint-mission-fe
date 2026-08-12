import Layout from "../components/layout/Layout";
import BestProductSection from "../components/product/BestProductSection";
import SaleProductList from "../components/product/SaleProductList";

function UsedProductsPage() {
  return (
    <Layout>
      <BestProductSection />
      <SaleProductList />
    </Layout>
  );
}
export default UsedProductsPage;
