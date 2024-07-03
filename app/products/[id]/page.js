export default async function ProductDetailPage({ params }) {
    const product = await getProduct(params.id);
  
    return (
      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
      </div>
    );
  }
  
  async function getProduct(id) {
    const res = await fetch(`/api/productItems/${id}`);
    return res.json();
  }