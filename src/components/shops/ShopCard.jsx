export default function ShopCard({ shop }) {
  return (
    <article className="card p-4">
      <h3 className="text-lg font-bold">{shop.shopName}</h3>
      <p className="text-sm text-slate-500">{shop.email}</p>
      <p className="mt-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold inline-block">{shop.status}</p>
    </article>
  );
}
