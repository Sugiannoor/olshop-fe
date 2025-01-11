import { CartList } from "./features/cart/page/cart";
import { ProductList } from "./features/products/page/Product";

function App() {
  return (
    <div className="flex flex-col xl:flex-row justify-between min-h-screen gap-5 bg-gray-50 p-6">
      {/* Product Section */}
      <section>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product List</h1>
        <ProductList />
      </section>
      {/* Cart Section */}
      <section>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>
        <CartList />
      </section>
    </div>
  );
}

export default App;
