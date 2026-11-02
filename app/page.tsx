import { getProducts } from "./src/lib/product";
import { storeConfig } from "./src/store.config";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">{storeConfig.name}</h1>
      <p className="mt-2 text-gray-600">{storeConfig.description}</p>

      <section className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="rounded-lg border p-4">
            <pre className="whitespace-pre-wrap break-words text-sm">
              {JSON.stringify(product, null, 2)}
            </pre>
          </article>
        ))}
      </section>
    </main>
  );
}