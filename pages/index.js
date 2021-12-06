import Layout from "../components/Layout";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <Layout>
      <div>
        <h2>All Products</h2>
        <ProductList />
      </div>
    </Layout>
  );
}
