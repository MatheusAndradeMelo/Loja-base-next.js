import Link from "next/link";
import type { Product } from "../types";
import { formatPrice } from "../lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group rounded-xl border border-gray-200 p-4 transition hover:shadow-md"
    >
      <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-400">
        Sem imagem
      </div>
      <p className="text-xs uppercase tracking-wide text-gray-500">
        {product.category}
      </p>
      <h2 className="mt-1 font-medium group-hover:underline">{product.name}</h2>
      <p className="mt-2 text-lg font-semibold">{formatPrice(product.price)}</p>
    </Link>
  );
}