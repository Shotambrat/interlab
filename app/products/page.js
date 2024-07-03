export default async function ProductsPage() {
    const products = await getProducts();
  
    return (
      <div>
        <h1 className="text-4xl font-bold">Our Products</h1>
        {products.map(product => (
          <div key={product.id}>
            <a href={`/products/${product.id}`} className="text-blue-500">{product.name}</a>
          </div>
        ))}
      </div>
    );
  }
  
  async function getProducts() {
    const res = await fetch("http://localhost:3000/api/productItems");
    return res.json();
  }